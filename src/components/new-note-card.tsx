import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'lucide-react'
import { ChangeEvent, FormEvent, useState } from 'react'
import { toast } from 'sonner'

interface NewNoteCardProps {
    onNoteCreated: (content: string) => void
}

export function NewNoteCard({ onNoteCreated }: NewNoteCardProps) {
    const [shouldShowOnboarding, setShouldShowOnboarding] = useState(true)
    const [content, setContent] = useState('')

    function handleStartTextEditor() {
        setShouldShowOnboarding(false)
    }

    function handleContentChanged(event: ChangeEvent<HTMLTextAreaElement>) {
        setContent(event.target.value)
        if (event.target.value === '') {
            setShouldShowOnboarding(true)
        }
    }

    function handleSaveNote(event: FormEvent) {
        event.preventDefault()
        if (content !== '') {
            setShouldShowOnboarding(true)
            onNoteCreated(content)
            setContent('')
            toast.success('Nota salva com sucesso!')
        }
    }

    return (
        <Dialog.Root>
            <Dialog.Trigger className="flex flex-col gap-3 text-left rounded-md bg-slate-700 p-5">
                <span className="text-sm font-medium text-slate-200">Adicionar nota</span>
                <p className="text-sm leading-6 text-slate-400">
                    Grave uma nota em áudio que será convertida para texto automaticamente.
                </p>
            </Dialog.Trigger>

            <Dialog.Portal>
                <Dialog.Overlay className="inset-0 fixed bg-black/60" />
                <Dialog.Content className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[640px] w-full h-[60vh] bg-slate-700 rounded-md overflow-hidden flex flex-col outline-none">
                    <Dialog.Title />
                    <Dialog.Description />
                    <Dialog.Close className="absolute right-0 top-0 p-1.5 bg-slate-800 text-slate-400 hover:text-slate-100">
                        <X className="size-5" />
                    </Dialog.Close>

                    <form onSubmit={handleSaveNote} className="flex flex-col flex-1">
                        <div className="flex flex-1 flex-col gap-3 p-5">
                            <span className="text-sm font-medium text-slate-300">
                                Adicionar nota
                            </span>

                            {shouldShowOnboarding ? (
                                <p className="text-sm leading-6 text-slate-400">
                                    Comece{' '}
                                    <button className="font-medium text-lime-400 hover:underline">
                                        gravando uma nota
                                    </button>{' '}
                                    em áudio, ou se preferir,{' '}
                                    <button
                                        onClick={handleStartTextEditor}
                                        className="font-medium text-lime-400 hover:underline">
                                        utilize apenas texto.
                                    </button>
                                </p>
                            ) : (
                                <textarea
                                    autoFocus
                                    className="text-sm text-slate-400 leading-6 bg-transparent flex-1 resize-none"
                                    onChange={handleContentChanged}
                                />
                            )}
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-lime-400 py-4 text-center text-sm text-lime-950 font-medium outline-none hover:bg-lime-500">
                            Salvar nota
                        </button>
                    </form>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    )
}
