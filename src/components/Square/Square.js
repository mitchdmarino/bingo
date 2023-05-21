import { useEffect, useState } from "react"
import "./Square.css"

export default function Square({task="placeholder"}) {
    const [size, setSize] = useState(12)
    const handleSquareClick = () => {
        console.log("Square Clicked. ")
    }

    useEffect(() => {
        if (task==="FREE") {
            setSize(40)
        } 
    }, [task])
       

    return (
        <div className="square" onClick={handleSquareClick}>
            <p style={{fontSize: size}} className="task">{task}</p>
        </div>
    )
}