import PropTypes from 'prop-types'
import './Cart.css'
const Cart = ({cart}) => {
    return (
        <div>
            <h4>Cart item: {cart.length}</h4>

            <div className="cart-container">
                {
                    cart.map(bottle => <img key={bottle.id} src={bottle.img}></img>)
                }
            </div>
        </div>
    );
};

Cart.propTypes ={
    cart: PropTypes.array.isRequired
}

export default Cart;