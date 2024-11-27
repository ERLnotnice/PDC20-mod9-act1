import React from "react";

const Tab = ({ name, isActive, onClick }) => (
    <button
        style={{
            padding: "10px",
            cursor: "pointer",
            backgroundColor: isActive ? "#ddd" : "transparent",
            borderBottom: isActive ? "2px solid blue" : "none",
        }}
        onClick={onClick}
    >
        {name}
    </button>
);

export default Tab;
