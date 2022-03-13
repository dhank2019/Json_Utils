import React, { useRef, useState} from 'react';
import reactDom from 'react-dom';
import Table from './Table';

export default function TableApp(props) {
    const preview = React.createRef();
    const tableAreaRef = React.createRef();
    const [text, setText] = useState('');

    const convertToTable = (event)=>{
        const check = true;
        reactDom.render(<Table data={text}></Table>,document.querySelector('#preview'))
    };
   
    const handleOnChange = (event) => {
        // console.log("On change");
        setText(event.target.value);
    };

  return (
    <>
       <div className="container">
                <h1>{props.heading}</h1>
                <div className="form-group">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="10" ref={tableAreaRef}></textarea>
                </div>
                <button type="button" className="btn btn-primary mx-2 my-2" onClick={convertToTable}>Convert To Table</button>
                <div className="container">
                
                <h2>Converted To Table As</h2>
                <p id='preview'></p>
                </div>
            </div>
    </>
  )
}
