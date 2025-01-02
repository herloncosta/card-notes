import { ChangeEvent, useState } from 'react'
import { NewNoteCard } from './components/new-note-card'
import { NoteCard } from './components/note-card'

export interface Note {
    id: string
    date: Date
    content: string
}

export function App() {
    const [notes, setNotes] = useState<Note[]>(() => {
        const notesOnStorage = localStorage.getItem('notes')
        if (notesOnStorage) {
            return JSON.parse(notesOnStorage)
        }
        return []
    })
    const [search, setSearch] = useState('')

    function onNoteCreated(content: string) {
        const newNote = {
            id: crypto.randomUUID(),
            date: new Date(),
            content,
        }
        const notesArray = [newNote, ...notes]
        setNotes(notesArray)
        localStorage.setItem('notes', JSON.stringify(notesArray))
    }

    function onNoteDeleted(id: string) {
        const notesArray = notes.filter(note => note.id !== id)
        setNotes(notesArray)
        localStorage.setItem('notes', JSON.stringify(notesArray))
    }

    function handleSearch(event: ChangeEvent<HTMLInputElement>) {
        const query = event.target.value.toLocaleLowerCase()
        setSearch(query)
    }

    const filteredNotes =
        search !== ''
            ? notes.filter(note => note.content.toLocaleLowerCase().includes(search))
            : notes

    return (
        <div className="max-w-6xl mx-auto my-12 space-y-6">
            <h1 className="text-3xl font-bold select-none">Anotaê</h1>

            <form className="">
                <input
                    className="w-full bg-transparent text-3xl font-semibold tracking-tight outline-none placeholder:text-slate-500"
                    type="text"
                    placeholder="Busque suas notas..."
                    onChange={handleSearch}
                />
            </form>

            <div className="h-px bg-slate-700"></div>

            <div className="grid grid-cols-3 gap-6 auto-rows-[250px]">
                <NewNoteCard onNoteCreated={onNoteCreated} />

                {filteredNotes.map(note => (
                    <NoteCard key={note.id} note={note} onNoteDeleted={onNoteDeleted} />
                ))}
            </div>
        </div>
    )
}
