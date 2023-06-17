import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Badge } from "react-bootstrap";
import Cart from '../screens/Cart';
import Modal from '../Modal';
import { useCart, useDispatchCart } from "./contextReducer";


export default function Navbar() {
  const [cartView,setCartView] = useState(false)
  let data = useCart();
  const dispatch = useDispatchCart();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch({
      type: "INIT"
    })
  }, []);

  console.log(data, "ARPAN IS A GOOD BOY")
  const handleLogout = () => {  
    localStorage.removeItem("authToken");
    localStorage.removeItem("cart_item")
    navigate("/");
  };

  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-success">
        <div class="container-fluid">
          <Link class="navbar-brand fs-3 fst-italic" to="#">
            Food-o-Frenzy
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav me-auto mb-1">
              <li class="nav-item">
                <Link class="nav-link active fs-5" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              
              { localStorage.getItem("authToken") ? (
                <li class="nav-item">
                  <Link class="nav-link active fs-5" aria-current="page" to="/myOrder"> My Orders </Link>
                </li>
              ) : (
                ""
              )}
            </ul>
            {!localStorage.getItem("authToken") ? (
              <div className="d-flex">
                <Link className="btn bg-white text-success mx-1" to="/login">
                  Login
                </Link>
                <Link
                  className="btn bg-white text-success mx-1"
                  to="/createuser"
                >
                  SignUp
                </Link>
              </div>
            ) : (
              <div>
                <div className="btn bg-white text-success mx-2" onClick={()=> {setCartView(true)}}>
                  My Cart{" "}
                  <Badge pill bg="danger"> {data?.length} </Badge>
                </div>

                {cartView ? <Modal onClose={() => setCartView(false)}><Cart></Cart></Modal> : ""}
                
                <div
                  className="btn bg-white text-danger mx-2"
                  onClick={handleLogout}
                >
                  Logout
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}