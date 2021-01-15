import React from "react";
import {TodoListProps} from "../../../types/types";

export const Note: React.FC<TodoListProps> = (props) => {

    return (
        <ul className="list-group">
        {props.notes.map((note) => {
            return (
                <li className="list-group-item note" id={note.id} key={note.title}>
                    <span>{note.title}</span>
                    <button className="btn btn-outline-danger" onClick={() => props.deleteNote(note.id, note.title)}>x</button>
                </li>
            )
        })}
    </ul>
)
}