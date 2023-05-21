import { useEffect, useState } from "react"
import "./Square.css"

export default function Square({task="placeholder"}) {
    const [size, setSize] = useState(15)
    const handleSquareClick = () => {
        console.log("Square Clicked. ")
    }

    useEffect(() => {
        if (task==="FREE") {
            setSize(50)
        } 
    })
       

    return (
        <div className="square" onClick={handleSquareClick}>
            <p style={{fontSize: size}}>{task}</p>
        </div>
    )
}