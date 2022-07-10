import React from "react";
import Item from './Item';
import Items from './data';

const List = ({toggleState}) => {
    const state = toggleState.toLowerCase();
    let filteredItems = [];
    state === 'all' ? filteredItems = Items : filteredItems = Items.filter((item) => {return item.category === state});
    console.log(filteredItems);
    return (
        <ul className="main-list">
            {filteredItems.map(item => {
                return (<Item key={item.id} {...item}/>);
            })}
        </ul>
    );
};

export default List;