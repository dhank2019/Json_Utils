
import React, { useState } from 'react';

export default function TextForm(props) {
    const [text, setText] = useState('');
    const handleUpClick = () => {
        // console.log("Uppercase was clicked");
        var upperText = text.toUpperCase();
        setText(upperText)
    };
    const handleOnChange = (event) => {
        // console.log("On change");
        setText(event.target.value);
    };
    const handleLowClick = (event) => {
        var lowerText = text.toLowerCase();
        setText(lowerText)
    };
    return (
        <>
            <div className="container">
                <h1>{props.heading}</h1>
                <div className="form-group">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="10"></textarea>
                </div>
                <button type="button" class="btn btn-primary mx-2" onClick={handleUpClick}>Change To Uppercase</button>
                <button type="button" class="btn btn-primary mx-2" onClick={handleLowClick}>Change To Lowercase</button>
            </div>

            <div className="container">
                <h2>Your Text Summary</h2>
                <p>{text.split(" ").length}words and {text.length} characters</p>
                <p>{0.008*text.split(" ").length} min avg time to read it</p>
                <h3>Preview</h3>
                <p>{text}</p>
            </div>
        </>

    )
}
