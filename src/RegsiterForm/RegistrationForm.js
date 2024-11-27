import React, { useState } from "react";
import Tab from "./Tab";
import TabContent from "./TabContent";
import "bootstrap/dist/css/bootstrap.min.css";

const RegistrationForm = () => {
    const [activeTab, setActiveTab] = useState("personal");
    const [formData, setFormData] = useState({
        personal: { firstName: "", lastName: "", dob: "", gender: "" },
        contact: { email: "", phone: "", address: "", city: "" },
        academic: { studentId: "", program: "", yearLevel: "", gpa: "" },
        additional: { hobbies: "", skills: "", notes: "" },
    });

    const [errors, setErrors] = useState({
        personal: {},
        contact: {},
        academic: {},
        additional: {},
    });

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    const handleChange = (section, field, value) => {
        setFormData((prevData) => ({
            ...prevData,
            [section]: {
                ...prevData[section],
                [field]: value,
            },
        }));
        setErrors((prevErrors) => ({
            ...prevErrors,
            [section]: { ...prevErrors[section], [field]: "" },
        }));
    };

    const validateForm = () => {
        const newErrors = { personal: {}, contact: {}, academic: {}, additional: {} };
        let isValid = true;

        if (!formData.personal.firstName.trim()) {
            newErrors.personal.firstName = "First Name is required";
            isValid = false;
        }
        if (!formData.contact.email.trim()) {
            newErrors.contact.email = "Email is required";
            isValid = false;
        }
        if (!formData.academic.studentId.trim()) {
            newErrors.academic.studentId = "Student ID is required";
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (validateForm()) {
            // Consolidate the form data into a string for display
            const consolidatedData = JSON.stringify(formData, null, 2);
            
            // Show the consolidated data in a popup (using alert)
            alert("Form submitted successfully!\n\nConsolidated Data:\n" + consolidatedData);
            
            // Alternatively, log the data to the console
            console.log("Submitted Data:", formData);
        } else {
            alert("Please fill out all required fields.");
        }
    };

    return (
        <div className="container mt-5 p-4" style={{ maxWidth: "600px", border: "1px solid #ddd", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
            <h2 className="text-center mb-4">Registration Form</h2>
            <div className="d-flex justify-content-around mb-3 border-bottom pb-2">
                <Tab name="Personal Info" isActive={activeTab === "personal"} onClick={() => handleTabChange("personal")} />
                <Tab name="Contact Info" isActive={activeTab === "contact"} onClick={() => handleTabChange("contact")} />
                <Tab name="Academic Info" isActive={activeTab === "academic"} onClick={() => handleTabChange("academic")} />
                <Tab name="Additional Details" isActive={activeTab === "additional"} onClick={() => handleTabChange("additional")} />
            </div>
            <form onSubmit={handleSubmit}>
                <TabContent
                    activeTab={activeTab}
                    formData={formData}
                    onChange={handleChange}
                    errors={errors}
                />
                <div className="text-center mt-4">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default RegistrationForm;
