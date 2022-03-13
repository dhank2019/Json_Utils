import React, { useState } from 'react';
import json2xml from '../json2xml';
import validateJson from './Utils';
import { saveAs } from './FileSaver';

export default function TextForm(props) {
    const textareaRef = React.createRef();
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
    const clearText = (event) => {
        const newText = '';
        setText(newText);
    };
    const copyToClipBoard = (event) => {
        /* Select the text field */
        textareaRef.current.select();
        textareaRef.current.setSelectionRange(0, 99999); /* For mobile devices */

        /* Copy the text inside the text field */
        navigator.clipboard.writeText(textareaRef.current.value);

    }
    const jsonFormtter = (event) => {
        if (validateJson(text)) {
            try {
                var formattedText = JSON.stringify(JSON.parse(text), null, 4);
                setText(formattedText);
            } catch (error) {
                setText('Fatal Error While Converting' + error)
            }

        }else{
            alert('Json is invalid so cannot format it')
        }

    }
    const xmlConverter = (event) => {
        if (validateJson(text)) {
            try {
                var formattedText = JSON.parse(text);
                var convertedText = json2xml(formattedText);
                setText(convertedText);
            } catch (error) {
                setText(error);
            }

        } else {
            alert('Unable to convert as Json is invalid')
        }

    }
    const checkValidJson = (event) => {
        var isValid = validateJson(text);
        if (isValid) {
            alert('Json Is Valid')
        } else {
            alert('Json is invalid')
        }
    }

    const download = (event) =>{
        var blob = new Blob([text], {
            type: "text/plain;charset=utf-8;",
        });
        saveAs(blob, "util.txt");
    }
    return (
        <>
            <div className="container">
                <h1>{props.heading}</h1>
                <div className="form-group">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="10" ref={textareaRef}></textarea>
                </div>
                <button type="button" className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Change To Uppercase</button>
                <button type="button" className="btn btn-primary mx-2 my-2" onClick={handleLowClick}>Change To Lowercase</button>
                <button type="button" className="btn btn-primary mx-2 my-2" onClick={clearText}>Clear</button>
                <button type="button" className="btn btn-primary mx-2 my-2" onClick={copyToClipBoard}>Copy To ClipBoard</button>
                <button type="button" className="btn btn-primary mx-2 my-2" onClick={jsonFormtter}>Json Formatter</button>
                <button type="button" className="btn btn-primary mx-2 my-2" onClick={xmlConverter}>Convert To XML</button>
                <button type="button" className="btn btn-primary mx-2 my-2" onClick={checkValidJson}>Check If Valid Json</button>
                <button type="button" className="btn btn-primary mx-2 my-2" onClick={download}>Download Text</button>
            </div>

            <div className="container">
                <h2>Your Text Summary</h2>
                <p>{text.split(" ").length}words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} min avg time to read it</p>
                <h3>Preview</h3>
                <p>{text}</p>
            </div>
        </>

    )
}
