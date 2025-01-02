import { useState } from 'react'
import { NewNoteCard } from './components/new-note-card'
import { NoteCard } from './components/note-card'

export function App() {
    const [notes, setNotes] = useState([
        {
            id: 1,
            date: new Date(),
            content: 'Lorem ipsum dolor sit amet...',
        },
        {
            id: 2,
            date: new Date(),
            content: 'Lorem ipsum dolor sit amet...',
        },
    ])

    function onNoteCreated(content: string) {
        const newNote = {
            id: Math.random(),
            date: new Date(),
            content
        }

        setNotes([newNote, ...notes])
    }

    return (
        <div className="max-w-6xl mx-auto my-12 space-y-6">
            <h1 className="text-3xl font-bold select-none">Personal Notes</h1>

            <form className="">
                <input
                    className="w-full bg-transparent text-3xl font-semibold tracking-tight outline-none placeholder:text-slate-500"
                    type="text"
                    placeholder="Busque suas notas..."
                />
            </form>

            <div className="h-px bg-slate-700"></div>

            <div className="grid grid-cols-3 gap-6 auto-rows-[250px]">
                <NewNoteCard onNoteCreated={onNoteCreated} />

                {notes.map(note => (
                    <NoteCard key={note.id} note={note} />
                ))}
            </div>
        </div>
    )
}
