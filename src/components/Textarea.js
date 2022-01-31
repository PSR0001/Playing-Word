import React, {useState} from 'react'
import PropTypes from 'prop-types'

export default function Textarea(probs) {

    const setUpCase= ()=>{
        // console.log("u click on button")
        let newText = text.toUpperCase()
        setText(newText)
    }
    const setLowCase= ()=>{
      let newLowerText = text.toLowerCase()
      setText(newLowerText)
    }
    const clearTextArea = ()=>{
        setText('')
    }
    const textAreaChange = (event)=>{
        // console.log("onchange")
        setText(event.target.value)
    }
    const copyText=()=>{
      let text = document.getElementById('text')
      text.select()
      text.setSelectionRange(0,9999)
      navigator.clipboard.writeText(text.value);

    }
  const [text, setText] = useState('');
    return (
            <>
            <div style= {{color: probs.mode === 'dark'?'white':'black'}}>
            <div >
            <h1>{probs.heading}</h1>
                <textarea className="form-control" value={text} onChange={textAreaChange} style= {{backgroundColor: probs.mode === 'light'?'white':'#c2c2c2'}} id="text" rows="8"></textarea>
                <button className="btn btn-primary my-3" onClick={setUpCase} >Convert to UpperCase</button>
                <button className="btn btn-primary my-3 mx-2" onClick={setLowCase} >Convert to LowerCase</button>
                <button className="btn btn-primary my-3 mx-2" onClick={clearTextArea} >Clear Text</button>
                <button className="btn btn-primary my-3 mx-2" onClick={copyText} >Cpoy to Clip Board</button>

            </div>
            <div className="container my-3">
              <h1>Your Content Summery Is here</h1>
              <p>{text.split(" ").length} words and {text.length} Characters</p>
              <p>{0.008 * text.split(" ").length } Min to Read 😮</p>
              <h2>Preview</h2>
              <p>{text}</p>
            </div>
            </div>
            </>
    )
}


Textarea.propTypes = {
    heading: PropTypes.string.isRequired

}
Textarea.defaultProbs = {
    heading: "title prob set here"

}
