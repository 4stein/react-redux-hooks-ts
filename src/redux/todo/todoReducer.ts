import {deleteNotes, fetchNotes, postNotes} from "../../api/api";
import {SystemState} from "../../types/types";

// Const
const GET_NOTES = 'todo/GET_NOTES'
const ADD_NOTE = 'todo/ADD_NOTE'
const DELETE_NOTE = 'todo/DELETE_NOTE'

let initialState: SystemState = {
    notes: []
};

//Reducer
const todoReducer = (state = initialState, action: any) => {

    switch (action.type) {
        case GET_NOTES:
            return {
                ...state,
                notes: [...state.notes, ...action.notes]
            }
        case ADD_NOTE:

            return {
                ...state,
                notes: [...state.notes, {
                    ...action.newMessage
                }]
            }
        case DELETE_NOTE:
            return {
                ...state,
                notes: state.notes.filter(note => note.title !== action.title)
            }
        default:
            return state;
    }
}

// Action Creators
export const getNotes = (notes: any) => ({
    type: GET_NOTES,
    notes
})
export const addNote = (title: any) => ({
    type: ADD_NOTE,
    newMessage: title
})
export const deleteNote = (title: any) => ({
    type: DELETE_NOTE,
    title
})
// Redux Thunk Creator
export const getUsersTC = () => async (dispatch: any) => {
    const payload = await fetchNotes()
    dispatch(getNotes(payload));
}
export const postUsersTC = (title: any) => async (dispatch: any) => {
    const payload = await postNotes(title)
    dispatch(addNote(payload));
}
export const deleteUsersTC = (id: any, title: any) => async (dispatch: any) => {
    await deleteNotes(id)
    dispatch(deleteNote(title));
}



export default todoReducer;