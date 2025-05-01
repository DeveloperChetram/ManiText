    // import logo from './logo.svg';
    import Main from './Components/Main';
    import './App.css';
    import About from './Components/About';
    import React, {useState} from 'react';

    function App(props) {
      const[text, setText] = React.useState('enter your text here');
      const [mode, setmode] = useState('light')
      let toggle = ()=>{  
          if (mode=='light'){
              setmode('dark');
            //  console.log(mode);
          }
          else{
              setmode('light');
              // console.log(mode);
              }
      }

      return (
      <>
   <Main title='ChangeText' button="Uppercase" heading='Enter your text to make changes' mode={mode}   toggle={toggle} />
        {/* <About/> */}
      </>
      );
    }

    export default App;
