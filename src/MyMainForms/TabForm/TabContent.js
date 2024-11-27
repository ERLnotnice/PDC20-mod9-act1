import React from "react";

const TabContent = ({ activeTab, formData, onChange }) => {
    return (
        <div style={{ padding: '20px' }}>
            {activeTab === 'basic' && (
                <div>
                    <h2>Basic Information</h2>
                    <label>
                        Name:
                        <input
                            type="text"
                            value={formData.name}
                            onChange={(e) => onChange('name', e.target.value)}
                            placeholder="Enter your name"
                        />
                    </label>
                    <label>
                        Age:
                        <input
                            type="number"
                            value={formData.age}
                            onChange={(e) => onChange('age', e.target.value)}
                            placeholder="Enter your age"
                        />
                    </label>
                </div>
            )}

            {activeTab === 'contact' && (
                <div>
                    <h2>Contact Information</h2>
                    <label>
                        Email:
                        <input
                            type="email"
                            value={formData.email}
                            onChange={(e) => onChange('email', e.target.value)}
                            placeholder="Enter your email"
                        />
                    </label>
                    <label>
                        Phone:
                        <input
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => onChange('phone', e.target.value)}
                            placeholder="Enter your phone"
                        />
                    </label>
                </div>
            )}

            {activeTab === 'account' && (
                <div>
                    <h2>Account Information</h2>
                    <label>
                        Username:
                        <input
                            type="text"
                            value={formData.username}
                            onChange={(e) => onChange('username', e.target.value)}
                            placeholder="Enter your username"
                        />
                    </label>
                    <label>
                        Password:
                        <input
                            type="password"
                            value={formData.password}
                            onChange={(e) => onChange('password', e.target.value)}
                            placeholder="Enter your password"
                        />
                    </label>
                </div>
            )}
        </div>
    );
};

export default TabContent;
