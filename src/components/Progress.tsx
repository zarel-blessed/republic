const Progress = () => {
    return (
        <div className="relative mt-2 h-2 w-full max-w-[400px] bg-slate-400 rounded-lg overflow-hidden">
            <div className="absolute top-0 left-0 bottom-0 w-[40%] bg-green-700 rounded-lg overflow-hidden">
                <div className="absolute top-0 left-0 bottom-0 w-[20%] bg-green-500 rounded-lg overflow-hidden" />
            </div>
        </div>
    );
}

export default Progress;
