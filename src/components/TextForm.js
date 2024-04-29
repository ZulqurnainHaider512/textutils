import React, { useState } from "react"

export default function TextForm(props) {
    const handleUpClick=()=>{
// console.log('Upercase was clicked' + text);
let newText=text.toUpperCase();
setText(newText)
props.showAlert("converted to upercase","success")
    }
    const handleLoClick=()=>{
        // console.log('lowercase was clicked' + text);
        let newText=text.toLowerCase();
        setText(newText)
        props.showAlert("converted to Lowercase","success")
            }
            // const handlecopyClick = () => {
            //     navigator.clipboard.writeText(text)
            //         .then(() => {
            //             console.log("Text copied to clipboard:", text);
            //             // Optionally, you can provide feedback to the user that the text has been copied
            //             alert("Text copied to clipboard!");
            //         })
            //         .catch(err => {
            //             console.error("Unable to copy text to clipboard:", err);
            //             // Optionally, you can provide feedback to the user that copying failed
            //             alert("Unable to copy text to clipboard!");
            //         });
            // }

            const handlecopyClick = () => {
                var text=document.getElementById("myBox");
                text.select();
                navigator.clipboard.writeText(text.value);
                props.showAlert("TextCopy","success")
            }

            const handleclearClick=()=>{
                // console.log('Upercase was clicked' + text);
                let newText="";
                setText(newText)
                props.showAlert("Data Clear","danger")
                    }
        

    const handleOnChange=(event)=>{
        // console.log('On Change');
        setText(event.target.value)
            }

    const [text, setText] = useState('');

  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'#071155'}}>
        <h1 >{props.heading}</h1>
        <div className="mb-3">
         <textarea className="form-control"value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',
        color:props.mode==='dark'?'white':'#071155'}} id="myBox" rows="8"></textarea>
        </div>
        <button className='btn btn-primary mx-1'onClick={handleUpClick}>Conver To Upercase</button>
        <button className='btn btn-primary mx-1'onClick={handleLoClick}>Conver To lowercase</button>
        <button className='btn btn-primary mx-1'onClick={handlecopyClick}>CopyText</button>
        <button className='btn btn-primary mx-1'onClick={handleclearClick}>Clear text</button>
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'#071155'}}>
        <h2>Text Summary</h2>
        <p> {text.split(" ").length} words and {text.length} charachters</p>
        <p>{0.008*text.split(" ").length} Minutes To read</p>
        <h2>Preview</h2>
        <p> {text.length>0?text:"Enter your text to preview"}</p>
    </div>

    </>
  )
} 
