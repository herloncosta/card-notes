interface NoteEditFormProps {
    newContent: string
    handleUpdateNote: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
    handleSaveNewNote: () => void
}

export function NoteEditForm({
    newContent,
    handleSaveNewNote,
    handleUpdateNote,
}: NoteEditFormProps) {
    return (
        <form className="flex flex-col flex-1">
            <textarea
                autoFocus
                className="text-sm text-slate-400 leading-6 bg-transparent flex-1 resize-none outline-none p-8"
                onChange={handleUpdateNote}
                value={newContent}
            />
            <button
                className="w-full bg-lime-400 py-4 text-center text-sm text-lime-950 font-medium outline-none hover:bg-lime-500"
                type="button"
                onClick={handleSaveNewNote}>
                Salvar edição
            </button>
        </form>
    )
}
