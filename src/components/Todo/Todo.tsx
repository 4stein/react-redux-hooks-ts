import React, {useEffect} from 'react';
import {ReduxForm} from "./ReduxForm/ReduxForm";
import {Note} from "./Note/Note";
import {TodoListProps} from "../../types/types";


export const Todo: React.FC<TodoListProps> = (props) => {
    // useEffect
    useEffect(() => {
        props.uploadNotes()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // Redux Form Callback
    let onSubmit = (formData: any) => {
        props.newNote(formData.message);
        formData.message = '';
    }

    return (
        <div className={`row`}>
            <div className={`col-12`}>
                <ReduxForm onSubmit={onSubmit}/>
                <hr/>
                <Note {...props}/>
            </div>
        </div>
    );
}
