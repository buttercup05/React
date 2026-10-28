import { useState } from "react";
export default function Form() {
    let [formData, setFormData] = useState({
        fullName: "",
        username: ""
    });

    let handleInputChange = (event) => {
        let fieldName = event.target.name;
        let newValue = event.target.value;

        setFormData((currValue) => {
            return {...currValue, [fieldName] : newValue};
        })
    }

    let handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        setFormData({
            fullName:"",
            username:""
        })
    }

    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="fullName">Full Name</label>
            <input placeholder="enter full name" type="text" value={formData.fullName} onChange={handleInputChange} id="fullName" name="fullName"/>
            <br /><br />
            <label htmlFor="username">Username</label>
            <input placeholder="enter full name" type="text" value={formData.username} onChange={handleInputChange} id="username" name="username"/>
            <br /><br />
            <button>Submit</button>
        </form>
    )
}