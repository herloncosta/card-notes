export function NoteCard() {
    return (
        <div className="rounded-md bg-slate-800 p-5 space-y-3 overflow-hidden relative">
            <span className="text-sm font-medium text-slate-300">há 4 dias</span>
            <p className="text-sm leading-6 text-slate-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque nobis, minima voluptatibus ipsum
                repellat, sequi fuga, quam nostrum beatae in consequatur. Praesentium, doloribus nemo. Earum tempore eum
                et totam sunt?
            </p>
            <div className="absolute left-0 bottom-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none" />
        </div>
    )
}
