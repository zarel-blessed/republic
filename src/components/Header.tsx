const Header = () => {
    return (
        <header className="border-b border-slate-300">
            <div className="flex flex-col md:flex-row gap-2 md:items-center justify-between p-4 lg:py-0 bg-black">
                <img src="/note-launch-logo.png" alt="" className="absolute top-0 lg:static" />

                <div className="text-slate-100 font-semibold mx-auto md:mx-0">
                    <img src="/republic-note-tiny-logo.svg" alt="" className="mr-2 inline" />
                    Republic Note is
                    <span className="inline-block ml-2 py-2 px-4 border border-slate-200 rounded-md">
                        now trading
                        <span className="ml-2 inline-block w-2 h-2 rounded-full bg-yellow-500" />
                    </span>
                </div>

                <span className="inline-block text-slate-100 text-center py-2 px-4 border border-slate-200 rounded-sm">
                    View Republic Note
                </span>
            </div>

            <div className="flex items-center justify-between px-4 max-w-[1200px] mx-auto py-5 lg:py-0">
                <div className="flex items-center gap-8">
                    <img src="/logo.svg" alt="" />

                    <span className="hidden lg:inline py-7 h-[76px] hover:border-b-2 border-blue-600 box-border">Investors</span>

                    <span className="hidden lg:inline py-7 h-[76px] hover:border-b-2 border-blue-600 box-border">Businesses</span>

                    <search className="flex items-center py-2 md:py-0 bg-neutral-300 px-4 rounded-3xl focus-within:w-[400px] focus-within:bg-slate-100">
                        <img src="/search.png" alt="" className="w-4 h-4" />
                        <input type="text" placeholder="Search" className="hidden md:inline p-2 bg-transparent outline-none placeholder:text-slate-600" />
                    </search>
                </div>

                <div className="flex items-center gap-8">
                    <img src="/globe.png" alt="" className="hidden lg:inline w-6 h-6" />

                    <span>Log in</span>

                    <span className="hidden lg:inline">Sign up</span>

                    <img src="/menu.png" alt="" className="w-6 lg:hidden" />
                </div>
            </div>
        </header>
    );
}

export default Header;
