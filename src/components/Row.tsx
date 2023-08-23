import {FC, useEffect, useState} from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import axios from 'axios';
import { Movie } from '.';


type rowProps = {
    title: string;
    fetchURL: string;
}


const Row: FC<rowProps> = ({title, fetchURL}) => {
    const [movies, setMovies] = useState<any[]>([]);

    useEffect(() => {
        axios.get(fetchURL).then((response) => {
            setMovies(response.data.results)
        })
    }, [fetchURL])


  return (
    <>
        <h2 className='text-white font-bold md:text-xl p-8'>{title}</h2>
        <div className='relative flex items-center group'>
                <BsChevronCompactLeft fill='white' className='left-0 font-bold rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' size={40}/>
            <div id={'slider'} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
                {movies.map((item:string, id:number) => (
                    <Movie key={id} item={item}/>
                ))}
            </div>
                <BsChevronCompactRight fill='white' className='right-0 font-bold rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' size={40}/>
        </div>
    </>
  )
}

export default Row