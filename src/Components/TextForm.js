import { useState } from "react";
import React from 'react';

function TextForm(props) {

    const [ text, setText ] = useState("");
    const [ copyText, setCopyText ] = useState("Copy Text");
    const [ myStyle, setMyStyle ] = useState({
        backgroundColor: "#0d6efd"
    });

    let modeColor = {
        backgroundColor: (props.mode === 'light') ? 'white' : '#6c757d',
        color: (props.mode === 'light') ? 'black' : 'white'
    }

    const wordCount = (word) => {
        let count = 0;
        if (word === "") {
            return count = 0;
        } else {    
            let txt = word.split(/[ ]+/).join(" ");
            count = txt.split(" ").length;
            return count;
        }
    }

    const onChangeHandle = (e) => {
        setText(e.target.value);
    }

    const toUpCaseHandle = () => {
        let newText = text.toUpperCase();
        if (!(text.length > 0)) {
            props.showAlert("Please enter some text to perform action.");
        }
        setText(newText);
    }

    const toLowCaseHandle = () => {
        let newText = text.toLowerCase();
        if (!(text.length > 0)) {
            props.showAlert("Please enter some text to perform action.");
        }
        setText(newText);
    }

    const handleExtraSpaces = () => {
        if (!(text.length > 0)) {
            props.showAlert("Please enter some text to perform action.");
        }
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }

    const handleCopy = () => {
        let copiedText = document.getElementById("textArea");
        copiedText.select();
        navigator.clipboard.writeText(copiedText.value);
        props.showAlert("Copied to Clipboard!");
        setCopyText("Copied");

        setMyStyle({
            backgroundColor: "green"
        });

        setTimeout(() => {
            setCopyText("Copy Text");
            setMyStyle({
                backgroundColor: "#0d6efd"
            });
        }, 2000);
    }

    const resetHandle = () => {
        setText("");
    }

    return (
        <div className='container'>
            {/* <div className="mb-3">
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
            </div> */}
            <div className="mb-3 my-3">
                <h3>{props.heading}</h3>
                <textarea className="form-control" style={modeColor} value={text} onChange={onChangeHandle} id="textArea" rows="8"></textarea>
            </div>
            <button className='btn btn-primary mb-3 mx-1' onClick={toUpCaseHandle}>Convert to Uppercase</button>
            <button className='btn btn-primary mb-3 mx-1' onClick={toLowCaseHandle}>Convert to Lowercase</button>
            <button className='btn btn-primary mb-3 mx-1' onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            <button className='btn btn-primary mb-3 mx-1' style={myStyle} onClick={handleCopy}>{copyText}</button>
            <button className='btn btn-danger mb-3 mx-1' onClick={resetHandle}>Reset</button>
            <div className="mb-3 my-3">
                <h3>Summary</h3>
                <p>{text.length} Characters and {wordCount(text)} words</p>
            </div>
            <div className="mb-3 my-3">
                <h3>Preview</h3>
                <textarea className="form-control" style={modeColor} value={text} id="resultArea" rows="8" readOnly></textarea>
            </div>
        </div>
    );
}

export default TextForm;
