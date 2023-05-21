import Square from "../Square/Square"

import { tasks } from "./tasks"
import "./Board.css"


export default function Board() {
    
    const squares = tasks.map(task => {
        return <Square task={task} />
    })

    return (
        <div className="board">
            {squares}
        </div>
    )
}