export type SystemState  = {
    notes: any[]
};


export type TodoListProps = {
    deleteNote(id: string, title: string): any
    newNote(newNoteText: string): any
    notes: TTodos[]
    uploadNotes(): any
}

export type TTodos = {
    date: string
    title: string
    id: string
}
