import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'lucide-react'
import { ChangeEvent, useState } from 'react'
import { toast } from 'sonner'

interface NewNoteCardProps {
    onNoteCreated: (content: string) => void
}

let speechRecognition: SpeechRecognition | null = null

export function NewNoteCard({ onNoteCreated }: NewNoteCardProps) {
    const [shouldShowOnboarding, setShouldShowOnboarding] = useState(true)
    const [content, setContent] = useState('')
    const [isRecording, setIsRecording] = useState(false)

    function handleStartTextEditor() {
        setShouldShowOnboarding(false)
    }

    function handleContentChanged(event: ChangeEvent<HTMLTextAreaElement>) {
        setContent(event.target.value)
        if (event.target.value === '') {
            setShouldShowOnboarding(true)
        }
    }

    function handleSaveNote() {
        if (content !== '') {
            setShouldShowOnboarding(true)
            onNoteCreated(content)
            setContent('')
            toast.success('Nota salva com sucesso!')
        }
    }

    function handleStartRecording() {
        const isSpeechRecognitionAvailable =
            'SpeechRecognition' in window || 'webkitSpeechRecognition' in window

        if (!isSpeechRecognitionAvailable) {
            toast.error('A API de reconhecimento de voz não está disponível neste navegador.')
            return
        }

        setIsRecording(true)
        setShouldShowOnboarding(false)

        const SpeechRecognitionAPI = window.SpeechRecognition || window.webkitSpeechRecognition
        let speechRecognition = new SpeechRecognitionAPI()
        speechRecognition.lang = 'pt-BR'
        speechRecognition.continuous = true // continua reconhecendo enquanto o usuário está falando
        speechRecognition.interimResults = true // mostra as palavras reconhecidas em tempo real
        speechRecognition.maxAlternatives = 1 // mostra apenas a melhor alternativa da palavra reconhecida

        speechRecognition.onresult = event => {
            const transcription = Array.from(event.results).reduce((text, result) => {
                return text.concat(result[0].transcript)
            }, '')
            setContent(transcription)
        }

        speechRecognition.onerror = event => {
            console.error('Erro ao reconhecer a fala:', event.error)
            toast.error('Ocorreu um erro ao reconhecer a fala. Por favor, tente novamente.')
        }

        speechRecognition.start()
    }

    function handleStopRecording() {
        if (speechRecognition !== null) {
            speechRecognition.stop()
        }

        setIsRecording(false)
        toast.success('Gravação encerrada com sucesso! Você já pode salvar sua nota!')
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

                    <form className="flex flex-col flex-1">
                        <div className="flex flex-1 flex-col gap-3 p-5">
                            <span className="text-sm font-medium text-slate-300">
                                Adicionar nota
                            </span>

                            {shouldShowOnboarding ? (
                                <p className="text-sm leading-6 text-slate-400">
                                    Comece{' '}
                                    <button
                                        type="button"
                                        onClick={handleStartRecording}
                                        className="font-medium text-lime-400 hover:underline">
                                        gravando uma nota
                                    </button>{' '}
                                    em áudio, ou se preferir,{' '}
                                    <button
                                        type="button"
                                        onClick={handleStartTextEditor}
                                        className="font-medium text-lime-400 hover:underline">
                                        utilize apenas texto.
                                    </button>
                                </p>
                            ) : (
                                <textarea
                                    autoFocus
                                    className="text-sm text-slate-400 leading-6 bg-transparent flex-1 resize-none outline-none"
                                    onChange={handleContentChanged}
                                />
                            )}
                        </div>
                        {isRecording ? (
                            <button
                                type="button"
                                onClick={handleStopRecording}
                                className="w-full flex items-center justify-center gap-2 bg-slate-900 py-4 text-sm text-slate-300 font-medium outline-none hover:text-slate-100">
                                <div className="size-3 rounded-full bg-red-500 animate-pulse" />
                                Gravando! (clique para interromper!)
                            </button>
                        ) : (
                            <button
                                type="button"
                                onClick={handleSaveNote}
                                className="w-full bg-lime-400 py-4 text-center text-sm text-lime-950 font-medium outline-none hover:bg-lime-500">
                                Salvar nota
                            </button>
                        )}
                    </form>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    )
}
