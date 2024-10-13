import React from 'react'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

const Card = (props) => {

    let review = props.review;
    return (
        <div className='flex flex-col md:relative '>
            <div className='absolute top-[-5rem] z-[10] mx-auto'>
                <img src={review.image} alt="" className='aspect-square rounded-full w-[100px] h-[100px] z-25' />

                <div className='w-[100px] h-[100px] bg-violet-500 rounded-full absolute top-[-3px] z-[-10] left-[10px]'>

                </div>
            
            </div>
            

            <div className='text-center mt-7'>
                <p className='font-bold text-2xl capitalize'>{review.name}</p>
                <p className='text-violet-300 uppercase text-small'>{review.job}</p>
            </div>


            <div className='text-violet-400 mx-auto mt-5'>
                <FaQuoteLeft />
            </div>

            <div className='text-center  mt-4 text-slate-500'>

                <p>{review.text}</p>
            </div>

            <div className='text-violet-400 mx-auto mt-5'>
                <FaQuoteRight />
            </div>

        </div>
    )
    }

export default Card
