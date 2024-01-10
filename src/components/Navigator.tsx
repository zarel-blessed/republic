const Navigator = () => {
    return (
        <nav className="max-w-[1200px] mx-auto px-6 border-b border-slate-300">
            <ul className="flex gap-12">
                <li><a href="#pitch" className="inline-block h-[42px] border-b-4 border-blue-800 text-blue-800 hover:text-blue-700 font-semibold">Pitch</a></li>

                <li><a href="#discussion" className="inline-block h-[42px] font-semibold text-slate-700 hover:text-blue-700">Discussion <span className="inline-block h-6 text-xs p-1 bg-slate-400 aspect-square">95</span></a></li>

                <li><a href="#updates" className="inline-block h-[42px] font-semibold text-slate-700 hover:text-blue-700">Updates <span className="inline-block h-6 text-xs p-1 bg-slate-400 aspect-square">2</span></a></li>

                <li><a href="#reviews" className="inline-block h-[42px] font-semibold text-slate-700 hover:text-blue-700">Reviews <span className="inline-block h-6 text-xs p-1 bg-slate-400 aspect-square">14</span></a></li>
            </ul>
        </nav>
    );
}

export default Navigator
