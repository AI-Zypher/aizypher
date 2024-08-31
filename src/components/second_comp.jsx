"use client";

import React from "react";

const borderGradientStyle = {
  borderRadius: "0.5rem", // Rounded corners for the border
  border: "4px solid transparent", // Border thickness
  background: "black", // Black background for the section
  backgroundClip: "padding-box", // Ensures the border doesn't cover the content
  borderImage: "linear-gradient(45deg, purple, purple) 1", // Purple border color
  boxShadow: "0 10px 20px rgba(128, 0, 128, 0.6)", // Always present shadow
  transition: "box-shadow 0.3s ease", // Smooth transition for shadow
};

const SecondComp = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#016E2D] to-black p-4">
      <div className="text-white max-w-4xl mx-auto text-justify">
        {/* Section 1: SRM Institute of Science and Technology */}
        <section
          className="relative mb-8 p-6 rounded-lg border-4 border-transparent transition-shadow duration-300 ease-in-out"
          style={borderGradientStyle}
        >
          <h1 className="text-4xl font-bold mb-4 text-center">
            SRM Institute of Science and Technology (SRMIST) Ramapuram
          </h1>
          <p>
            SRM Institute of Science and Technology (SRMIST) Ramapuram is one of the prominent campuses of the SRM group, located in Chennai, Tamil Nadu. Known for its focus on engineering, technology, and management programs, the campus provides a dynamic educational environment that blends academic rigor with practical learning and research. Equipped with state-of-the-art infrastructure, including modern classrooms, advanced laboratories, and extensive libraries, SRM Ramapuram offers a wide range of undergraduate, postgraduate, and doctoral programs tailored to meet industry standards. The campus fosters strong industry collaborations, offering students valuable opportunities for internships, placements, and projects that enhance their career readiness. With a team of experienced faculty committed to academic and research excellence, the institution encourages cutting-edge research across various disciplines. Additionally, SRM Ramapuram promotes a vibrant campus life through student clubs, cultural events, technical fests, and sports facilities, creating a holistic environment for personal and professional growth. Situated in the well-connected suburb of Ramapuram, the campus provides a serene yet accessible location, making it an ideal place for students to pursue their academic and career aspirations.
          </p>
        </section>
        
        {/* Section 2: AI Zypher */}
        <section
          className="relative mb-8 p-6 rounded-lg border-4 border-transparent transition-shadow duration-300 ease-in-out"
          style={borderGradientStyle}
        >
          <h2 className="text-3xl font-semibold mb-4 text-center">
            AI Zypher
          </h2>
          <p>
            AI Zypher is a flagship event organized by the Artificial Intelligence and Machine Learning (AIML) Department at SRM Institute of Science and Technology (SRMIST). This event is designed to bring together students, researchers, industry experts, and AI enthusiasts to explore the latest advancements, trends, and applications in the fields of artificial intelligence and machine learning.
          </p>
          <p>
            AI Zypher serves as a dynamic platform for participants to engage in a variety of activities, including technical workshops, hackathons, paper presentations, and keynote sessions by industry leaders and academic experts. These activities are aimed at fostering innovation, encouraging collaborative problem-solving, and showcasing cutting-edge research and projects in AI and ML.
          </p>
          <p>
            One of the key highlights of AI Zypher is its hackathon, where participants from diverse backgrounds work in teams to develop AI-driven solutions to real-world challenges. This hands-on experience allows students to apply their knowledge and skills in a competitive yet collaborative environment, often leading to the development of innovative prototypes and ideas that have the potential to impact various industries.
          </p>
          <p>
            In addition to the technical events, AI Zypher also features panel discussions and networking sessions, providing attendees with the opportunity to interact with professionals, exchange ideas, and gain insights into the future of AI and ML. These interactions are invaluable for students looking to build careers in these rapidly growing fields, as they offer a chance to learn from and connect with experts who are shaping the future of technology.
          </p>
          <p>
            Overall, AI Zypher is not just an event, but a celebration of the potential of artificial intelligence and machine learning to transform industries and improve lives. It embodies the AIML Department's commitment to advancing education, research, and innovation in these fields, and provides a platform for the next generation of AI leaders to emerge.
          </p>
        </section>

        {/* Section 3: AIML Department */}
        <section
          className="relative mb-8 p-6 rounded-lg border-4 border-transparent transition-shadow duration-300 ease-in-out"
          style={borderGradientStyle}
        >
          <h2 className="text-3xl font-semibold mb-4 text-center">
            AIML Department
          </h2>
          <p>
            The Artificial Intelligence and Machine Learning (AIML) Department at SRM Institute of Science and Technology (SRMIST) is a cutting-edge academic division dedicated to advancing education and research in the rapidly evolving fields of AI and ML. The department offers a robust curriculum that covers a wide range of topics, including deep learning, natural language processing, computer vision, robotics, data science, and neural networks, ensuring that students gain a comprehensive understanding of both theoretical and practical aspects of AI and ML.
          </p>
          <p>
            Equipped with state-of-the-art laboratories and research facilities, the AIML department provides students with hands-on experience in designing and implementing AI-driven solutions to real-world problems. The department is staffed by a team of experienced and highly qualified faculty members who are actively engaged in research, contributing to advancements in AI and ML while mentoring students on their academic and professional journeys.
          </p>
          <p>
            The AIML Department emphasizes interdisciplinary learning and industry collaboration, encouraging students to participate in internships, industry projects, and collaborative research with leading technology companies. This approach ensures that graduates are well-prepared for the demands of the AI and ML job market, with the skills and knowledge required to excel in various roles, from data scientists and AI engineers to research scientists and innovators.
          </p>
          <p>
            In addition to academic excellence, the department fosters a vibrant learning community through seminars, workshops, hackathons, and conferences, providing students with opportunities to engage with industry experts, present their research, and stay updated with the latest trends and technologies in AI and ML. The AIML Department at SRMIST is committed to producing skilled professionals who are ready to contribute to the future of technology and innovation.
          </p>
        </section>
      </div>
    </div>
  );
};

export default SecondComp;
