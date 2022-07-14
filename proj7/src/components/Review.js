import { useState } from "react";
import Reviews from './data';
// import Slider from "./Slider";

const Review = () => {
    const [current, setCurrent] = useState(0);

    const changeIndexBack = () => {
        current === 0 ? setCurrent(Reviews.length - 1) : setCurrent(current - 1);
    };

    const changeIndexForward = () => {
        current === Reviews.length - 1 ? setCurrent(0) : setCurrent(current + 1);
    };

    return (
        <div className="main-slide">
            <div className="main-slide-list">
                {Reviews.map(({id, img, name, title, quote}, index) => {
                    let position = 'next';
                    if (index === current) {
                        position = 'active';
                    } else if (index === current - 1 || (current === 0  && index === Reviews.length - 1)) {
                        position = 'previous'
                    }

                    return (
                        <div key={id} className={'slide-item ' + position}>
                            {(
                                <>
                                <img src={img} alt="some stuff" />
                                <h2>{name}</h2>
                                <h2>{title}</h2>
                                <p>{quote}</p>
                                </>
                            )}
                        </div>
                    );
                })}
            </div>
            <button onClick={() => {changeIndexBack()}}>&lt;</button>
            <button onClick={() => {changeIndexForward()}}>&gt;</button>
        </div>
    );
};

export default Review;