import * as Dialog from '@radix-ui/react-dialog'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { SquarePen, X } from 'lucide-react'
import { Note } from '../app'
import { useState } from 'react'
import { NoteEditForm } from './note-edit-form'

interface NoteCardProps {
    note: Note
    onNoteUpdated: (id: string, content: string) => void
    onNoteDeleted: (id: string) => void
}

export function NoteCard({ note, onNoteUpdated, onNoteDeleted }: NoteCardProps) {
    const [isEditing, setIsEditing] = useState(false)
    const [newContent, setNewContent] = useState(note.content)

    function handleUpdateNote(event: React.ChangeEvent<HTMLTextAreaElement>) {
        setNewContent(event.target.value)
    }

    function handleSaveNewNote() {
        onNoteUpdated(note.id, newContent)
        setIsEditing(false)
    }

    return (
        <Dialog.Root>
            <Dialog.Trigger className="rounded-md outline-none text-left bg-slate-800 p-5 flex flex-col gap-3 overflow-hidden relative hover:ring-2 hover:ring-slate-600 focus-visible:ring-2 focus-visible:ring-lime-400">
                <span className="text-sm font-medium text-slate-300">
                    {formatDistanceToNow(note.date, { locale: ptBR, addSuffix: true })}
                </span>
                <p className="text-sm leading-6 text-slate-400">{note.content}</p>
                <div className="absolute left-0 bottom-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none" />
            </Dialog.Trigger>

            <Dialog.Portal>
                <Dialog.Overlay className="inset-0 fixed bg-black/60" />
                <Dialog.Content className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[640px] w-full h-[60vh] bg-slate-700 rounded-md overflow-hidden flex flex-col outline-none">
                    <Dialog.Title />
                    <Dialog.Description />
                    <Dialog.Close className="absolute right-0 top-0 p-1.5 bg-slate-800 text-slate-400 hover:text-slate-100">
                        <X className="size-5" />
                    </Dialog.Close>

                    <button
                        type="button"
                        className="absolute right-8 top-0 p-1.5 bg-slate-800 text-slate-400 hover:text-slate-100"
                        onClick={() => setIsEditing(true)}>
                        <SquarePen className="size-5" />
                    </button>

                    {isEditing ? (
                        <NoteEditForm
                            newContent={newContent}
                            handleSaveNewNote={handleSaveNewNote}
                            handleUpdateNote={handleUpdateNote}
                        />
                    ) : (
                        <div className="flex flex-1 flex-col gap-3 p-5">
                            <span className="text-sm font-medium text-slate-300">
                                {formatDistanceToNow(note.date, { locale: ptBR, addSuffix: true })}
                            </span>
                            <p className="text-sm leading-6 text-slate-400">{note.content}</p>
                        </div>
                    )}

                    {!isEditing && (
                        <button
                            type="button"
                            onClick={() => onNoteDeleted(note.id)}
                            className="group w-full bg-slate-800 py-4 text-center text-sm text-slate-300 font-medium outline-none">
                            Deseja{' '}
                            <span className="text-red-400 group-hover:underline">
                                apagar esta nota
                            </span>
                            ?
                        </button>
                    )}
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    )
}
