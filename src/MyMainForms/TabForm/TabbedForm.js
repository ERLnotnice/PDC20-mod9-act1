import React, { useState } from "react";
import Tab from "./Tab";
import TabContent from "./TabContent";

const TabbedForm = () => {
    const [activeTab, setActiveTab] = useState('basic'); // Fixed typo: `usaState` to `useState`
    const [formData, setFormData] = useState({ // Fixed typo: `usaState` to `useState`
        name: '',
        age: '',
        email: '',
        phone: '',
        username: '',
        password: '',
    });

    const handleTabChange = (tab) => { // Fixed typo: `hanleTabChange` to `handleTabChange`
        setActiveTab(tab);
    };

    const handleChange = (field, value) => {
        setFormData((prevData) => ({
            ...prevData,
            [field]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Submitted Data: ${JSON.stringify(formData, null, 2)}`);
    };

    return (
        <div>
            <h1>Tabbed form with shared state</h1>
            <div style={{ display: 'flex', borderBottom: '1px solid #ccc' }}>
                <Tab
                    name="Basic Information"
                    isActive={activeTab === 'basic'}
                    onClick={() => handleTabChange('basic')}
                />

                <Tab
                    name="Contact Information"
                    isActive={activeTab === 'contact'}
                    onClick={() => handleTabChange('contact')}
                />

                <Tab
                    name="Account Information"
                    isActive={activeTab === 'account'}
                    onClick={() => handleTabChange('account')}
                />
            </div>
            <form onSubmit={handleSubmit}>
                <TabContent
                    activeTab={activeTab}
                    formData={formData}
                    onChange={handleChange}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default TabbedForm;
