import React, { FC, useEffect, useState } from 'react'
import axios from 'axios';
import requests from '../Requests';
import { BiInfoCircle } from 'react-icons/bi';



const Main: FC = () => {
    const [movies, setMovies] = useState<any[]>([])

    const movie = movies[Math.floor(Math.random() * movies.length)];

    useEffect(() => {
        axios.get(requests.requestPopular).then((response) => {
            setMovies(response.data.results)
        })
    }, [])
    console.log(movie);
  return (
    <div className='w-full h-[550px] text-white'>
        <div className='w-full h-full'>
            <div className='absolute w-full h-[550px] bg-gradient-to-r from-black'></div>
            <img 
                className='w-full h-full object-cover' 
                src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} 
                alt={movie?.title} 
            />
            <div>
                <div>
                    <button className='rounded bg-gray-300 text-xl font-bold text-black border-gray-300 py-4 px-8 ml-8 hover:bg-gray-400'>Play</button>
                    <button className='rounded text-white text-xl font-bold bg-gray-500  py-4 px-12 ml-4 hover:bg-gray-600'><span className='mr-2'><BiInfoCircle className='inline object-fit pb-[4px]' size='1.2em'/></span>More Info</button>  
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main