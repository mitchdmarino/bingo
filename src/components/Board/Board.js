import {Square} from "../Square/Square"

import { tasks } from "./tasks"
import "./Board.css"


export default function Board() {
    
    const squares = tasks.map((task, i) => {
        return <Square key={i} task={task} />
    })

    return (
        <div className="board">
            {squares}
        </div>
    )
}