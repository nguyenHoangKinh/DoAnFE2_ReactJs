import React, { useContext } from 'react'
import { Songs } from '../Context'

export default function DetailSong() {
    const {song} = useContext(Songs)
    return (
        <div className='col-span-1 p-3'>
            <h2 className='text-cyan-500 font-bold ml-10'>Now playing</h2>
            <h2 className='text-neutral-400 text-2xl ml-10'>{song.name}</h2>
            <div className='w-[500px] m-auto mt-5'>
                <img className='w-full' src={song.links.images[0].url} alt='avatar' />
            </div>
            <div className='flex items-center mt-5'>
            <img className='w-[100px] rounded-full ml-16 logo' src={song.links.images[1].url} alt='avatar' />
            <span className='text-xl text-white ml-5'>{song.author}</span>
            </div>
        </div>
    )
}
