import ReactPlayer from 'react-player/youtube'
import Progress from './Progress';

const Introduction = () => {
    return (
        <section className='flex flex-col lg:flex-row justify-between gap-12 max-w-[1200px] mx-auto px-4 py-24'>
            <div>
                <div className='flex gap-2 items-center'>
                    <img src="/peak-icon.webp" alt="" className='w-10' />
                    <h1 className='text-4xl text-neutral-950 font-extrabold'>Peak Ski Company</h1>
                </div>

                <p className='text-slate-500 text-xl mb-6'>Revolutionary skis with proprietary technology by Olympian Bode Miller</p>

                <div className="flex gap-2 mb-6">
                    <span className="py-1 px-2 bg-slate-300 text-xs rounded-sm">D2C</span>
                    <span className="py-1 px-2 bg-slate-300 text-xs rounded-sm">Fitness</span>
                    <span className="py-1 px-2 bg-slate-300 text-xs rounded-sm">B2C</span>
                    <span className="py-1 px-2 bg-slate-300 text-xs rounded-sm">Sports</span>
                </div>

                <ReactPlayer url='https://youtu.be/FgzT3P84ysE' />
            </div>

            <div className='flex flex-col flex-grow justify-between'>
                <div className='flex gap-4 justify-end'>
                    <img src="/star.png" alt="" className='w-6 invert-[0.2]' />
                    <img src="/share.png" alt="" className='w-6 invert-[0.2]' />
                </div>

                <div>
                    <h2 className='text-4xl text-neutral-950 font-bold'>$579,633</h2>
                    <p className='text-slate-600'>46% raised of $1.24M max goal</p>
                    <Progress />

                    <h2 className='text-4xl text-neutral-950 font-bold mt-8'>339</h2>
                    <p className='text-slate-600'>Investors</p>

                    <h2 className='text-4xl text-neutral-950 font-bold mt-8'>69 days</h2>
                    <p className='text-slate-600'>Left to invest</p>

                    <button className='bg-blue-700 hover:bg-blue-900 text-slate-50 font-semibold py-3 px-5 rounded-md mt-6'>Invest in Peak Ski Company</button>
                    <p className='text-sm text-slate-500 mt-1'><span className='font-semibold'>$250</span> minimum investment</p>
                </div>
            </div>
        </section>
    );
}

export default Introduction
