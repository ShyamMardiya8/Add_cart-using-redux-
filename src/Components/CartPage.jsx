import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addtoCart } from '../Store/CartSlice';

function CartPage() {
    const select = useSelector((state) => state.allCart.item); 
    const CartItems = useSelector((state) => state.allCart.cart)
    const dispatch = useDispatch();

    const handleCart = (item) => { 
        const isAlready = CartItems.some(CartItems => CartItems.id === item.id)
        if (!isAlready) {
            dispatch(addtoCart(item));
        console.log('Dispatched item:', item);   
        }  
        else{
            alert('alerady added item in store')
        }
    };

    return (
        <div className="container">
            <div className="row">
                {select.map((item) => (
                    <div key={item.id} className="col-md-3 my-3 align-content-center">
                        <img src={item.img} alt={item.title} className='img-fluid'/>
                        <p className='fs-5'>{item.title}</p>
                        <p className='fs-6'>{item.price}</p>
                        <button className='btn btn-outline-primary' onClick={() => handleCart(item)}>Add to Cart</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CartPage;
