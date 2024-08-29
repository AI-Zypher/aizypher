"use client";
import React, { useState } from 'react';

const StudentForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        registerNo: '',
        mobileNo: '',
        yearOfStudy: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data Submitted:', formData);
        // Here you can handle form submission, like sending data to an API
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Register No.:</label>
                <input
                    type="text"
                    name="registerNo"
                    value={formData.registerNo}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Mobile No.:</label>
                <input
                    type="text"
                    name="mobileNo"
                    value={formData.mobileNo}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Year of Study:</label>
                <input
                    type="text"
                    name="yearOfStudy"
                    value={formData.yearOfStudy}
                    onChange={handleChange}
                    required
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default StudentForm;
