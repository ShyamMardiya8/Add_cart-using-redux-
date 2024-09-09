import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Header() { 
  const cartItems = useSelector((state) => state.allCart.cart)
  const cartTotal = cartItems.length 

  console.log("Number of cart items:", cartTotal)

  return (
    <>
      <div className="container ">
        <nav className="navbar navbar-expand-lg">
          <a href="#" className="navbar-brand">Exclusive</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#myheader"
            aria-controls="myheader"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse d-flex justify-content-end" id="myheader">
            <div className="d-flex">
              <form className="d-flex align-items-center">
                <input
                  type="text"
                  className="form-control me-2"
                  placeholder="Search-Items"
                />
                <Link to="/CartItem" className="nav-link">
                  <i className="fa-solid fa-cart-shopping">
                  <sup className="text-primary ms-2">{cartTotal}</sup>
                  </i>
                </Link>
              </form>
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}

export default Header
