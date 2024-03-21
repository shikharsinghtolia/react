import React, { useState } from 'react'



export default function TextForm(props) {
    const [Text,setText] = useState("Enter text here")
    const handleUpClick=()=>{
        console.log("clicked " + Text)
        let newText = Text.toUpperCase();
        setText(newText);

    }
    const handleOnChange=()=>{
        // console.log('changed')
        setText(Event.AT_TARGET.value)
    }
    return (
        <div>
            <div className="mb-3">
                <h1>{props.textArea}</h1>
                {/* <label for="myBox" className="form-label">Enter text here </label> */}
                <textarea className='form-control' value={Text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className='btn btn-primary' onClick={handleUpClick}>Convert to Upper Case</button>
        </div>
    )
}
