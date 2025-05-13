import React, { useState } from 'react'
// Removed 'About' import as it's not used in this file and commented out in App.jsx
// import About from './About' 

export default function Main(props) {
  const [text, setText] = useState('This is the sample text');
  
  const upper = () => {
    console.log("Uppercase was clicked");
    setText(text.toUpperCase());
  }
  const lower = () => {
    console.log("Lowercase was clicked");
    setText(text.toLowerCase());
  }
  const trim = () => {
    console.log("Trim was clicked");
    setText(text.trim());
  }
  const clear = () => {
    console.log("Clear was clicked");
    setText("");
  }
  const handleOnChange = (e) => {
    setText(e.target.value);
    console.log("on Change");
  }

  // Removed local 'style' state and 'changeTheme' function
  // The theme is now controlled by props.mode and CSS classes

  return (
    // The 'main' div will get 'dark-mode' or 'light-mode' class from App.jsx's wrapper
    // No need to add props.mode class here directly if App.jsx already wraps this component
    <div className="main"> 

      {/* Removed style={style} */}
      <nav className="custom-navbar"> 
        {/* Removed style={style} */}
        <div className="navbar-container"> 
          <a className="navbar-brand" href="#">{props.title}</a>
          <div className="navbar-links">
            <a className="nav-link" href="#">Home</a>
            <a className="nav-link" href="#">Features</a>
            <a className="nav-link" href="#">Pricing</a>
            <label className="switch">
              <input type="checkbox" id="toggleButton" onClick={props.toggle} checked={props.mode === 'dark'} readOnly />
              <span className="slider"></span>
            </label>
          </div>
        </div>
      </nav>

      {/* Removed style={style} */}
      <div className="custom-container"> 
        <h2 className="custom-heading">{props.heading}</h2>
        <form>
          {/* Removed style={style} */}
          <div className="form-group"> 
            <label htmlFor="textInput" className="form-label" >
              Enter Text
            </label>
            <textarea
              className="form-input"
              id="textInput"
              value={text}
              name="textInput"
              placeholder="Type something..."
              required
              onChange={handleOnChange}
              cols="5" rows="5"
              // Removed style={style}
            ></textarea>
          </div>
          <div className='button-container'>
            <button type="button" className="form-button" onClick={upper}>
              {props.button}
            </button>
            <button type="button" className="form-button" onClick={lower}>
              Lowecase
            </button>
            <button type="button" className="form-button" onClick={trim}>
              Trim
            </button>
            <button type="button" className="form-button clear" onClick={clear}>
              Clear
            </button>
            {/* <button type="button" className="form-button" onClick={handleUpClick}>
            {props.button}
          </button>
          <button type="button" className="form-button" onClick={handleUpClick}>
            {props.button}
          </button> */}
          </div>
          <div className='count' >
            <span> <h2>{text.length}</h2> characters and <h2>{text.trim() ? text.trim().split(" ").length : 0}</h2> words</span>
            <span><h2>{(text.trim() === "" ? 0 : 0.008 * text.trim().split(" ").length).toFixed(3)}</h2> Minutes will take to read this.</span>

          </div>
          <div className="preview">
            <h2>Preview</h2>
            <p>{text}</p>
          </div>
        </form>
      </div>
    </div>


  )
}
