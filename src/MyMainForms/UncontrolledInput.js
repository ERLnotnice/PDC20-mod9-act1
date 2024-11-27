import React, {useRef} from "react";

const UncontrolledInput =()=>{
    const phoneRef = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Phone number: ${phoneRef.current.value}`)
    };

    return(
        <from onSubmit={handleSubmit}>
            <input type="text"
                ref={phoneRef}
                placeholder="Enter your phone name"/>
        <button type="submit"> Submit</button>
        </from>
    );
};

export default UncontrolledInput;