import React from "react";
import data from './data';

const List = () => {
    return(
        <>
            <h1>List</h1>
            {data.map(dat => {
                return (
                    <div className="main-list-item">
                        <h2>{dat.name}</h2>
                        <p>{dat.age}</p>
                    </div>
                )
            })}
        </>
    )
};

export default List;