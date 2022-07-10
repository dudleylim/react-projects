const Item = ({title, price, img, desc}) => {
    return (
        <li className="list-item">
            <img src={img} alt={title} />
            <div className="item-details">
                <div className="item-heading">
                    <h3 className="item-title">{title}</h3>
                    <h3 className="item-price">${price}</h3>
                </div>
                <div className="item-details">
                    <p>{desc}</p>
                </div>
            </div>
        </li>
    );
};

export default Item;