import { useState } from "react";
export default function CommentsForm() {
    let [formData, setFormData] = useState({
        username: "", remarks:"", ratings:"5"
    });

    let handleInputChange = (event) => {
        setFormData((currData) => {
            return {...currData, [event.target.name] : event.target.value}
        });
    };

    let handleSubmit = (event) => {
        console.log(formData);
        event.preventDefault();
        setFormData({username:"", remarks:"", ratings:""});
    }

    return(
        <div className="CommentsForm">
            <h3>Give a comment!</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username </label>
                <input type="text" placeholder="username" value={formData.username} onChange={handleInputChange} id="username" name="username" />
                <br /><br />

                <label htmlFor="remarks">Remark </label>
                <textarea placeholder="Add few remarks" value={formData.remarks} onChange={handleInputChange} id="remarks" name="remarks" >Remarks</textarea>
                <br /><br />

                <label htmlFor="ratings">Rating </label>
                <input type="number" placeholder="ratings" min={1} max={5} value={formData.ratings} onChange={handleInputChange} id="ratings" name="ratings" />
                <br /><br />

                <button className="counter">Add Comment</button>
            </form>
        </div>
    )
}