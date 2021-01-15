import axios from "axios";

const url = 'https://react-hooks-example-88ef0-default-rtdb.firebaseio.com';

export const fetchNotes = async () => {

    const result = await axios.get(`${url}/notes.json`)
    const payload = Object.keys(result.data).map(key => {
        return {
            ...result.data[key],
            id: key
        }
    })
    return payload
}

export const postNotes = async (title: string) => {
    const note = {
        title, date: new Date().toJSON()
    }
    try {
        const result = await axios.post(`${url}/notes.json`, note)
        const payload = {
            ...note,
            id: result.data.name
        }
        return payload
    } catch (e) {
        throw new Error(e.messages)
    }
}

export const deleteNotes = async (id: string) => {
    await axios.delete(`${url}/notes/${id}.json `)
}