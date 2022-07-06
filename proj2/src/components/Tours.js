import React, {useState} from 'react';

const List = ({tours, removeTour}) => {
    const [readMore, setReadMore] = useState(false);
    return(
        <>
        <h1>Tours</h1>
        {tours.map(tour => {
            const {id, name, image, info, price} = tour;
            return (
                <div key={id} className="main-list-item">
                    <img src={image} alt={name} />
                    <div className="main-list-item-header">
                        <h2>{name}</h2>
                        <h3 className="main-list-item-price">${price}</h3>
                    </div>
                    <p>
                        {readMore ? info : info.substring(0, 200) + "..."}
                        <button className='info-read' onClick={() => setReadMore(!readMore)}>
                            {readMore ? 'Show Less' : 'Read More'}
                        </button>
                    </p>
                    <button className="item-delete" onClick={() => removeTour(tour.id)}>Not Interested</button>
                </div>
            );
        })}
        </>
    );
};

export default List;