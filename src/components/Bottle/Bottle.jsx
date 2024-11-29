import PropTypes from 'prop-types';
import './Bottle.css'
const Bottle = ({bottle, handleAddToCart}) => {
    let {name, price, img} = bottle;
    return (
        <div className="bottle">
            <h2>Name: {name}</h2>
            <img src={img}></img>
            <p>Price: {price}</p>
            <button onClick={() =>handleAddToCart(bottle)}>Purchage</button>
        </div>
    );
};

Bottle.propTypes = {
    bottle: PropTypes.object.isRequired,
    handleAddToCart: PropTypes.func.isRequired
}

export default Bottle;