import { useEffect, useState } from "react"
import React from 'react';
import "./Square.css"

function SquareContent({task="placeholder"}) {
    const [size, setSize] = useState(12)
    
    useEffect(() => {
        if (task==="FREE") {
            setSize(40)
        } 
    }, [task])
       

    return (
        <div>
            <p style={{fontSize: size}} className="task">{task}</p>
        </div>
    )
}


export const Square = props => {
  const [fileUploaded, setFileUploaded] = useState("")
  // Create a reference to the hidden file input element
  const hiddenFileInput = React.useRef(null);
  
  // Programatically click the hidden file input element
  // when the Button component is clicked
  const handleClick = event => {
    hiddenFileInput.current.click();
  };
  // Call a function (passed as a prop from the parent component)
  // to handle the user-selected file 
  const handleChange = event => {
    setFileUploaded(event.target.files[0])
  };
  return (
    <div className="square" onClick={handleClick}>
        {!fileUploaded ? (
                <SquareContent task={props.task} />
            ) : (
                <img src={URL.createObjectURL(fileUploaded)} className="img-preview" alt=""/>
            )
        }
        <input
            type="file"
            accept="image/*"
            ref={hiddenFileInput}
            onChange={handleChange}
            style={{display: 'none'}}
        />
    </div>
  );
}
