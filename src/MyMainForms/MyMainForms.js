import React from "react";
import BasicForms from "./BasicForms";
import { Route, Routes, Link } from "react-router-dom";
import ControlledInput from "./ControlledInput";
import UncontrolledInput from "./UncontrolledInput";
import TabbedForm from "./TabForm/TabbedForm";
import MyData from "./MyData";

const MyMainForms = () => {
    return (
        <div>
            <h1>React Forms App</h1>
            <nav>
                <ul>
                    <li><Link to="basic-form">Basic Form</Link></li>
                    <li><Link to="controlled-input">Controlled Input</Link></li>
                    <li><Link to="uncontrolled-input">UncontrolledInput</Link></li>
                    <li><Link to="tabbed-form">Tabbed Form</Link></li>
                    <li><Link to="mydata">My Data</Link></li>

                </ul>
            </nav>
            <Routes>
                <Route path="basic-form" element={<BasicForms/>}/>
                <Route path="controlled-input" element={<ControlledInput/>}/>
                <Route path="uncontrolled-input" element={<UncontrolledInput/>}/>
                <Route path="tabbed-form" element={<TabbedForm/>}/>
                <Route path="mydata" element={<MyData/>}/>
            </Routes>
        </div>

    );
};

export default MyMainForms;