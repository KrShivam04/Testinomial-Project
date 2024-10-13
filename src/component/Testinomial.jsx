import React, {useState} from 'react';
import Card from './Card';
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const Testinomial = (props) => {
    let reviews = props.reviews;
    const [index, setIndex] = useState(0);


    function leftShiftHandler () {
        if (index-1<0) {
            setIndex(reviews.length - 1);
        }
        else {
            setIndex(index-1);
        }
    }

    function rightShiftHandler () {
        if (index+1 >= reviews.length) {
            setIndex(0);
        }
        else {
            setIndex(index+1)
        } 
    }

    function surpriseHandler () {
        let randomVariable =  Math.floor(Math.random() * reviews.length);
        setIndex(randomVariable);

    }

    return (

        <div className='w-[85vw] md:w-[700px] bg-white flex flex-col justify-center item-center mt-19 p-10 transition-all duration-700 rounded-xl'>
            <Card review={reviews[index]}/>

            <div className='flex text-3xl mt-5 gap-3 text-violet-400 font-bold justify-center'>
                <button className='cursor-pointer hover:text-violet-500' onClick={leftShiftHandler}>
                    <FaArrowLeft />
                </button>
                <button className='cursor-pointer hover:text-violet-500' onClick={rightShiftHandler}>
                    <FaArrowRight />
                </button>
            </div>

            <div>
                <button onClick={surpriseHandler} className='bg-violet-400 hover:bg-violet-600 transition-all duration:200 cursor:pointer px-10 py-2 rounded-xl font-bold text-white text-large mt-7'>Surprise Me</button>
            </div>

        </div>
    );
}

export default Testinomial;