import {FC, useEffect, useState} from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import axios from 'axios';
import { Movie } from '.';


export interface RowProps {
    title: string;
    fetchURL: string;
    rowID: string;
}


const Row: FC<RowProps> = ({title, fetchURL, rowID}) => {
    const [movies, setMovies] = useState<string[]>([]);

    useEffect(() => {
        axios.get(fetchURL).then((response) => {
            setMovies(response.data.results)
        })
    }, [fetchURL])

    const slideLeft = () => {
        const slider = document.getElementById(`slider${rowID}`);
        if (slider) {
          slider.scrollLeft -= 500;
        }
      };
    
      const slideRight = () => {
        const slider = document.getElementById(`slider${rowID}`);
        if (slider) {
          slider.scrollLeft += 500;
        }
      };

  return (
    <>
        <h2 className='text-white font-bold md:text-xl p-8'>{title}</h2>
        <div className='relative flex items-center group'>
                <BsChevronCompactLeft 
                onClick = {slideLeft}
                fill='white' 
                className='left-0 font-bold rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' 
                size={40}
                />
            <div id={'slider' + rowID} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
                {movies.map((item:string, id:number) => (
                    <Movie key={id} item={item}/>
                ))}
            </div>
                <BsChevronCompactRight 
                onClick= {slideRight}
                fill='white' 
                className='right-0 font-bold rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' 
                size={40}
                />
        </div>
    </>
  )
}

export default Row