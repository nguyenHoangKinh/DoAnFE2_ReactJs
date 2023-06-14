import React, { useContext } from 'react'
import { Songs } from '../Context'

export default function DetailSong() {
    const { song } = useContext(Songs)
    return (
        <div className='col-span-1 p-3'>
            <h2 className='text-neutral-400 text-2xl ml-10'></h2>
            <div className='w-[500px] m-auto mt-5'>
                <img className='w-full' src={song.links.images[0].url} alt='avatar' />
            </div>
            <h2 className='text-cyan-50 text-3xl uppercase font-bold ml-10 text-center'>Now playing</h2>
            <div class="py-8 px-8 mx-auto shadow-2xl rounded-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
                <img className='w-[100px] rounded-full ml-16 logo' src={song.links.images[1].url} alt='avatar' />
                <div class="text-center space-y-2 sm:text-left">
                    <div class="space-y-0.5">
                        <p class="text-3xl font-medium text-black">
                            {song.author}
                        </p>
                        <p class="text-slate-500 font-medium">
                            {song.name}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
