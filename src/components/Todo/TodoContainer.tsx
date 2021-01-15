import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {deleteUsersTC, getUsersTC, postUsersTC} from "../../redux/todo/todoReducer";
import {Todo} from "./Todo";

export const TodoContainer: React.FC = () => {
    // useSelector
    const notes = useSelector((state: any) => state.todoList.notes );
    // useDispatch
    const dispatch = useDispatch();
    const uploadNotes = () => {dispatch(getUsersTC())}
    const newNote = (newNoteText: string) => {dispatch(postUsersTC(newNoteText))}
    const deleteNote = (id: string, title: string) => {dispatch(deleteUsersTC(id, title))}

    return (
        <Todo
            notes={notes}
            newNote={newNote}
            uploadNotes={uploadNotes}
            deleteNote={deleteNote}/>
    );
}

