import { ChangeEvent } from 'react'

interface CustomTextAreaProps {
    content: string
    onContentChanged: (event: ChangeEvent<HTMLTextAreaElement>) => void
}

export function CustomTextArea({ content, onContentChanged }: CustomTextAreaProps) {
    return (
        <textarea
            autoFocus
            className="text-sm text-slate-400 leading-6 bg-transparent flex-1 resize-none outline-none"
            onChange={onContentChanged}
            value={content}
        />
    )
}
