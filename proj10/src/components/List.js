import Item from './Item';

const List = ({items}) => {
    return (
        <ul className="main-list">
            {items.map((item) => {return <Item {...item}/>})}
        </ul>
    );
};

export default List;