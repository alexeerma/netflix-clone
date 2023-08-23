import { FC, useEffect, useState } from 'react'
import axios from 'axios';
import requests from '../Requests';
import { BiInfoCircle } from 'react-icons/bi';
import { GrPlayFill } from "react-icons/gr";


const Main: FC = () => {
    const [movies, setMovies] = useState<any[]>([])

    const movie = movies[Math.floor(Math.random() * movies.length)];

    useEffect(() => {
        axios.get(requests.requestPopular).then((response) => {
            setMovies(response.data.results)
        })
    }, [])

    const truncateString = (str:string, num:number) => {
        if (str?.length > num) {
          return str.slice(0, num) + '...';
        } else {
          return str;
        }
      };

   // console.log(movie);
  return (
    <div className='w-full h-[550px] text-white'>
        <div className='w-full h-full'>
            <div className='absolute w-full h-[550px] bg-gradient-to-r from-black'></div>
            <img 
                className='w-full h-full object-cover' 
                src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} 
                alt={movie?.title} 
            />
            <div className='absolute w-full top-[20%] p-4 md:p-8'>
                <h1 className='text-3xl md:text-5xl font-bold'>{movie?.title}</h1>
                <div className='my-4'>
                    <button className='rounded bg-gray-300 text-2xl font-bold text-black border-gray-300 py-[15px] px-8 hover:bg-gray-400'><span className='mr-2'><GrPlayFill className='inline object-fit pb-[4px]'/></span>
                        Play
                    </button>
                    <button className='rounded text-white text-2xl font-bold bg-gray-500  py-[15px] px-12 ml-4 hover:bg-opacity-60'><span className='mr-2'><BiInfoCircle className='inline object-fit pb-[4px]' size='1.2em'/></span>
                        More Info
                    </button>  
                </div>
                <p className='text-gray-400 text-sm'>Released: {movie?.release_date}</p>
                <p className='w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200'>{truncateString(movie?.overview, 200)}</p>
            </div>
        </div>
    </div>
  )
}

export default Main