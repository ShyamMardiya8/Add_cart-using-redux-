import React from 'react'
import { useSelector } from 'react-redux'
import { addtoCart, removeCart } from '../Store/CartSlice'
import {useDispatch} from 'react-redux'


function CartItems() {
    const select = useSelector((state) => (state.allCart.cart)) 
    console.warn("selected cart items is ", select);
    const dispatch = useDispatch()

    const handleRemove = (items) => {
        dispatch(removeCart(items))
    }
    return (
        <>
            {
                select.map((items) => (         
                    <div className="container my-3">
                        <div className="row justify-content-between">
                            <div className="col-md-8">
                                <div className="row rounded shadow align-items-center">
                                    <div className="col-md-6">
                                        <img src={items.img} alt="" className='img-fluid'/>
                                    </div>
                                    <div className="col-md-6">
                                        <h1 className="fs-5">{items.title}</h1>
                                        <h1 className="fs-6">{items.price}</h1>
                                        <button className="btn-close" onClick={() => handleRemove(items)}></button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="row shadow rounded py-3 px-3">
                                    <div className="col-md-8 text-primary ">Price is : {items.price}</div>
                                    <div className="col-md-8 text-primary ">total Amount : {items.price}</div>
                                    <div className="d-flex justify-content-center my-3">
                                    <button className="btn btn-outline-primary">Order Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }


        </>
    )
}

export default CartItems