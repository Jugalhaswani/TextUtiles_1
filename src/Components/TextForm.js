import React, { useState } from 'react'

export default function TextForm(props) {
    const handleupclicked =()=>{
        let newtext= text.toUpperCase();
        setText(newtext);
        props.showalert("Converted to UpperCase", "Success");
    }

    const handleloclicked =()=>{
        let newtext = text.toLowerCase();
        setText(newtext);
        props.showalert("Converted to LowerCase", "Success");
    }

    const handleclear =()=>{
        let newtext ='';
        setText(newtext)
        props.showalert("Text Cleared", "Success");
    }

    const handlecopy =()=>{
        navigator.clipboard.writeText(text);
        props.showalert("Copied to Clipboard!", "Success");
    }

    const handlespaces =() =>{
        let newtext = text.split(/[ ]+/);
        setText(newtext.join(" "));
        props.showalert("Spaces Removed", "Success");
    }

    const onchange =(event)=>{
        setText(event.target.value);
    }
    const [text,setText] =useState("");
  return (
<div className='container' style={{color:props.mode==='dark'?'white':'#042743'}}>
<div>
    <h1>{props.heading} </h1>
<div className="mb-3">
<textarea className="form-control" value={text} id="mybox" style={{backgroundColor: props.mode==='dark'?'#13466e':'white',
color:props.mode==='dark'?'white':'#042743'}} onChange={onchange} rows="8"></textarea>
</div>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleloclicked}>Convert To Lowercase</button>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleupclicked}>Convert To Uppercase</button>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleclear}>Clear Text</button>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handlecopy}>Copy Text</button>
<button disabled={text.length===0} className="btn btn-primary" onClick={handlespaces}>Remove Extra Spaces</button>
</div>

<div className="container">
    <h1>Your Text Summary</h1>
    <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length}  characters</p>
    <p>{0.008 * text.split(" ").filter((element)=>{return element.length!=0}).length} Minutes read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Nothing to Preview!"}</p>
</div>
</div>

  )
}
