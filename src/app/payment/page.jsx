"use client";
import React, { useState, useEffect } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../app/firebaseConfig";

const API_URL = process.env.NEXT_PUBLIC_EASEBUZZ_LINK;
const EASEBUZZ_KEY = process.env.NEXT_PUBLIC_EASEBUZZ_KEY;

const EasebuzzPayment = () => {
  const [error, setError] = useState(null);
  
  const txnid = "TXN" + Date.now() + Math.floor(Math.random() * 1000);

  const savePaymentData = async () => {
    try {
      const docRef = await addDoc(collection(db, "registered"), {
        txnid: txnid,
        amount: localStorage.getItem("pay"),
        firstname: localStorage.getItem("firstname"),
        email: localStorage.getItem("email"),
        phone: localStorage.getItem("phone"),
        event: localStorage.getItem("event_id"),
        userId: localStorage.getItem("userId"),
        productinfo: "AIZYPHER",
        paymentStatus: "Success",
        timestamp: new Date(),
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  useEffect(() => {
    const loadScript = () => {
      const script = document.createElement("script");
      script.src =
        "https://ebz-static.s3.ap-south-1.amazonaws.com/easecheckout/v2.0.0/easebuzz-checkout-v2.min.js";
      script.async = true;
      script.onload = initiatePayment;
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    };

    loadScript();
  }, []);

  const initiatePayment = async () => {
    try {
      const paymentData = {
        txnid,
        amount: localStorage.getItem("pay"),
        firstname: localStorage.getItem("firstname"),
        email: localStorage.getItem("email"),

        phone: localStorage.getItem("phone"),
        productinfo: "AIZYPHER",
        surl: "https://aizypher.in/dashboard",
        furl: "https://aizypher.in/dashboard",
      };

      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(paymentData),
      });

      const responseText = await response.text();

      if (!response.ok) {
        throw new Error(
          `HTTP error! status: ${response.status}, message: ${responseText}`
        );
      }

      let result;
      try {
        result = JSON.parse(responseText);
      } catch (e) {
        console.error("Failed to parse response as JSON:", responseText);
        throw new Error("Invalid response from server");
      }

      if (result.status === 1) {
        proceedToPayment(result.data);
      } else {
        setError(`Payment initiation failed: ${result.data}`);
      }
    } catch (error) {
      console.error("Error initiating payment:", error);
      setError(`Error initiating payment: ${error.message}`);
    }
  };

  const proceedToPayment = (access_key) => {
    if (window.EasebuzzCheckout) {
      if (!EASEBUZZ_KEY) {
        console.error("Easebuzz key is not set in environment variables");
        setError("Payment configuration error. Please contact support.");
        return;
      }

      const easebuzzCheckout = new window.EasebuzzCheckout(
        EASEBUZZ_KEY,
        "prod"
      );

      const sendEmail = async (recepientEmail) => {
        try {
          await fetch("https://aizypher-smtp.vercel.app/api/send-email", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              to: recepientEmail,
              subject: "Successful Registration on AIZYPHER!",
              html: `
    <!DOCTYPE html>
    <html lang='en'>
    <head>
      <meta charset='UTF-8'>
      <meta name='viewport' content='width=device-width, initial-scale=1.0'>
      <title>AIZYPHER - Registration Confirmation</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; }
        .container { margin: 0 auto; padding: 20px; max-width: 600px; }
        .header { background-color: #f4f4f4; padding: 10px; text-align: center; border-bottom: 2px solid #ddd; }
        .content { padding: 20px; }
        .button { display: block; width: fit-content; margin: 20px auto; padding: 10px 20px; text-align: center; background-color: #4CAF50; color: white; text-decoration: none; border-radius: 5px; }
        .footer { text-align: center; margin-top: 20px; font-size: 0.9em; color: #555; }
      </style>
    </head>
    <body>
      <div class='container'>
        <div class='header'>
          <h1>AIZYPHER</h1>
        </div>
        <div class='content'>
          <p>Dear Participant,</p>
          <p>Thank you for registering for the “AIZYPHER,” our exciting innovation challenge. We are thrilled to have you on board as we embark on this journey of creativity and problem-solving.</p>
          <h2>Your Registration is Confirmed!</h2>
          <p>You are now officially a participant in the event.</p>
          <h3>Next Steps:</h3>
          <p>To keep you updated and engaged, we have created a WhatsApp group where you can connect with other participants, mentors, and organizers. Join the group using the button below:</p>
          <a class='button' href='https://chat.whatsapp.com/LKytIjyvHBGB8MCyimcB0W' style='color: white;'>Join the WhatsApp Group</a>
          <p>If you have any questions or need further information, please don’t hesitate to reach out.</p>
          <p>Best of luck, and we look forward to your participation!</p>
          <p>Warm regards,</p>
          <p>AIZYPHER Web Dev Team</p>
        </div>
        <div class='footer'>
          &copy; 2024 AIZYPHER. All rights reserved.
        </div>
      </div>
    </body>
    </html>
  `,
            }),
          });
        } catch (error) {
          console.error("Error sending email: ", error);
        }
      };

      const options = {
        access_key: access_key,
        onResponse: async (response) => {
          if (response.status === "success") {
            await savePaymentData();
            await sendEmail(localStorage.getItem("email"));
            window.location.href = "/dashboard";
          } else {
            window.location.href = "/dashboard";
          }
        },
        theme: "#123456",
      };
      easebuzzCheckout.initiatePayment(options);
    } else {
      console.error("Easebuzz SDK not loaded");
      setError("Payment gateway not available. Please try again later.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      {error && <div className="mt-4 text-red-600 text-center">{error}</div>}
    </div>
  );
};

export default EasebuzzPayment;
