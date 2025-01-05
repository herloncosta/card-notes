import { CustomTextArea } from './custom-text-area'

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
            <div className="flex flex-col flex-1 gap-3 p-5">
                <span className="text-sm font-medium">Editar nota</span>
                <CustomTextArea content={newContent} onContentChanged={handleUpdateNote} />
            </div>
            <button
                className="w-full bg-lime-400 py-4 text-center text-sm text-lime-950 font-medium outline-none hover:bg-lime-500"
                type="button"
                onClick={handleSaveNewNote}>
                Salvar edição
            </button>
        </form>
    )
}
