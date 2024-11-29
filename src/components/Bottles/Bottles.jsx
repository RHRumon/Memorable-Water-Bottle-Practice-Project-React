import { useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css'
import { addToLS, getStoredCart } from "../../utilities/localStorage";
import Cart from "../Cart/Cart";

const Bottles = () => {
    let [bottles, setBottles] = useState([]);
    let [cart, setCart] = useState([]);
    
    useEffect(() => {
        fetch('Bottle.json')
        .then(res => res.json())
        .then(data => setBottles(data));
    },[])

    useEffect(()=> {
        console.log("called the use Effect",bottles.length);
        
        if(bottles.length > 0){
            let storedCart = getStoredCart();
            // console.log("hello",storedCart, bottles);

            let savedCart = [];
            for(let id of storedCart){
                console.log(id);

                let bottle = bottles.find(bottle => bottle.id == id);
                savedCart.push(bottle);
            }
            console.log("saved cart",savedCart);
            setCart(savedCart);

        }
        
    },[bottles])

    let handleAddToCart = (bottle) =>{
        console.log(bottle);
        let newCart = [...cart, bottle];
        setCart(newCart);
        addToLS(bottle.id);
    }

    return (
        <div>
            <h2>Bottles available: {bottles.length}</h2>
            <Cart cart={cart}></Cart>

            <div className="bottle-container">
            {
                bottles.map(bottle => <Bottle 
                    key={bottle.id} 
                    bottle={bottle}
                    handleAddToCart={handleAddToCart}></Bottle>)
            }
            </div>
        </div>
    );
};

export default Bottles;