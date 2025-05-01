import React, { useState } from 'react';
import Main from './Main';
// import './About.css';


const About = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const accordionData = [
    { title: 'About Us', content: 'Content for About Us.' },
    { title: 'Our Mission', content: 'Content for Our Mission.' },
    { title: 'History', content: 'Content for History.' },
    { title: 'Contact', content: 'Content for Contact.' },
  ];

const [myStyle, setmyStyle] = useState({
    color: 'white',
    backgroundColor:'#05081c',
})

let toggle = ()=>{
 if   (myStyle.color=='white'){
    setmyStyle({
        color:'black',
        backgroundColor:'white'
    })
 }
 else{
    setmyStyle({
        color:'white',
        backgroundColor:'#05081c'
    })
}
}


  return (
    <div className="accordion" style={myStyle}>
      {accordionData.map((item, index) => (
        <div key={index} className="accordion-item">
          <div
            className={`accordion-title ${activeIndex === index ? 'active' : ''}`}
            onClick={() => handleClick(index)}
            style={myStyle}
          >
            {item.title}
          </div>
          <div className={`accordion-content ${activeIndex === index ? 'open' : 'closed'}`} style={myStyle}>
            {item.content}
            
          </div>

        </div>
        
      ))}
                <button className="mode-button" onClick={toggle}>Change theme</button>

    </div>
  );
};

export default About;