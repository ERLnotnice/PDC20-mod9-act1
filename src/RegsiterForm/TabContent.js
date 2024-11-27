import React from "react";

const TabContent = ({ activeTab, formData, onChange, errors }) => {
    const renderPersonalInfo = () => (
        <div>
            <div className="mb-3">
                <label>First Name</label>
                <input
                    type="text"
                    className="form-control"
                    value={formData.personal.firstName}
                    onChange={(e) => onChange("personal", "firstName", e.target.value)}
                />
                {errors.personal.firstName && <small className="text-danger">{errors.personal.firstName}</small>}
            </div>
            <div className="mb-3">
                <label>Last Name</label>
                <input
                    type="text"
                    className="form-control"
                    value={formData.personal.lastName}
                    onChange={(e) => onChange("personal", "lastName", e.target.value)}
                />
            </div>
            <div className="mb-3">
                <label>Date of Birth</label>
                <input
                    type="date"
                    className="form-control"
                    value={formData.personal.dob}
                    onChange={(e) => onChange("personal", "dob", e.target.value)}
                />
            </div>
            <div className="mb-3">
                <label>Gender</label>
                <select
                    className="form-control"
                    value={formData.personal.gender}
                    onChange={(e) => onChange("personal", "gender", e.target.value)}
                >
                    <option value="">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
            </div>
        </div>
    );

    const renderContactInfo = () => (
        <div>
            <div className="mb-3">
                <label>Email</label>
                <input
                    type="email"
                    className="form-control"
                    value={formData.contact.email}
                    onChange={(e) => onChange("contact", "email", e.target.value)}
                />
                {errors.contact.email && <small className="text-danger">{errors.contact.email}</small>}
            </div>
            <div className="mb-3">
                <label>Phone</label>
                <input
                    type="text"
                    className="form-control"
                    value={formData.contact.phone}
                    onChange={(e) => onChange("contact", "phone", e.target.value)}
                />
            </div>
            <div className="mb-3">
                <label>Address</label>
                <input
                    type="text"
                    className="form-control"
                    value={formData.contact.address}
                    onChange={(e) => onChange("contact", "address", e.target.value)}
                />
            </div>
            <div className="mb-3">
                <label>City</label>
                <input
                    type="text"
                    className="form-control"
                    value={formData.contact.city}
                    onChange={(e) => onChange("contact", "city", e.target.value)}
                />
            </div>
        </div>
    );

    const renderAcademicInfo = () => (
        <div>
            <div className="mb-3">
                <label>Student ID</label>
                <input
                    type="text"
                    className="form-control"
                    value={formData.academic.studentId}
                    onChange={(e) => onChange("academic", "studentId", e.target.value)}
                />
                {errors.academic.studentId && <small className="text-danger">{errors.academic.studentId}</small>}
            </div>
            <div className="mb-3">
                <label>Program</label>
                <input
                    type="text"
                    className="form-control"
                    value={formData.academic.program}
                    onChange={(e) => onChange("academic", "program", e.target.value)}
                />
            </div>
            <div className="mb-3">
                <label>Year Level</label>
                <input
                    type="text"
                    className="form-control"
                    value={formData.academic.yearLevel}
                    onChange={(e) => onChange("academic", "yearLevel", e.target.value)}
                />
            </div>
            <div className="mb-3">
                <label>GPA</label>
                <input
                    type="text"
                    className="form-control"
                    value={formData.academic.gpa}
                    onChange={(e) => onChange("academic", "gpa", e.target.value)}
                />
            </div>
        </div>
    );

    const renderAdditionalDetails = () => (
        <div>
            <div className="mb-3">
                <label>Hobbies</label>
                <input
                    type="text"
                    className="form-control"
                    value={formData.additional.hobbies}
                    onChange={(e) => onChange("additional", "hobbies", e.target.value)}
                />
            </div>
            <div className="mb-3">
                <label>Skills</label>
                <input
                    type="text"
                    className="form-control"
                    value={formData.additional.skills}
                    onChange={(e) => onChange("additional", "skills", e.target.value)}
                />
            </div>
            <div className="mb-3">
                <label>Notes</label>
                <textarea
                    className="form-control"
                    value={formData.additional.notes}
                    onChange={(e) => onChange("additional", "notes", e.target.value)}
                />
            </div>
        </div>
    );

    return (
        <div>
            {activeTab === "personal" && renderPersonalInfo()}
            {activeTab === "contact" && renderContactInfo()}
            {activeTab === "academic" && renderAcademicInfo()}
            {activeTab === "additional" && renderAdditionalDetails()}
        </div>
    );
};

export default TabContent;
