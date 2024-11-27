import React, {useState} from "react";

const ControlledInput =() => {
    const [email, setEmail] = useState('');

    const handleChange = (e) =>{
        setEmail(e.target.value);
        console.log("Current Email:", e.target.value)
    }
    return (
        <div>
            <label htmlFor="email">Email: </label>
            <input type="email"
            value={email}
            onChange={handleChange}
            placeholder="Enter your email"
            />
            <p> Your email is: {email}</p>
        </div>
    );
}

export default ControlledInput;