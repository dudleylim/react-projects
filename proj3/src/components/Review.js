import React, {useState} from 'react';
import Reviews from './data'; // array of reviews
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

const Review = () => {
    const [index, setIndex] = useState(0); // index for the reviews array to be displayed
    const {name, job, image, text, id} = Reviews[index];

    const goBack = () => {
        index === 0 ? setIndex(Reviews.length - 1) : setIndex(index - 1);
        console.log(index);
    };

    const goForward = () => {
        index === Reviews.length - 1 ? setIndex(0) : setIndex(index + 1);
        console.log(index);
    };

    const randomize = () => {
        setIndex(Math.floor(Math.random() * 4));
    };

    return (
        <>
        <section className='main-review'>
            <h2>{id} {name}</h2>
            <img src={image} alt={name} />
            <h3>{job}</h3>
            <p>{text}</p>
            <button onClick={() => {goBack()}}><BsChevronLeft /></button>
            <button onClick={() => {goForward()}}><BsChevronRight /></button>
            <button onClick={() => {randomize()}}>Randomize</button>
        </section>
        </>
    );
};

export default Review;