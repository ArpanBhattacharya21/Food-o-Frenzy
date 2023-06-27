import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Badge } from "react-bootstrap";
import Cart from '../screens/Cart';
import Modal from '../Modal';
import { useCart, useDispatchCart } from "./contextReducer";
import brand from "../Photos/Logo.png";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';


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

  //console.log(data, "ARPAN IS A GOOD BOY")
  const handleLogout = () => {  
    localStorage.removeItem("authToken");
    localStorage.removeItem("cart_item");
    toast.error("Logged Out!");
    //navigate("/");
    setTimeout(() => {
      navigate('/');
    }, 2000);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-warning fixed-top">
        <div className="container-fluid">
          <Link className="navbar-brand fs-2 navFont" style={{"color":"#800020"}} to="/">
            <img src={brand} alt="logo" width="70px" height=""/>Food-o-Frenzy
          </Link>
          
          <button
            className="navbar-toggler"
            type="button"
            onClick={(e) => {
              const ele = document.getElementById("navbarNav");
              if (ele.classList.contains("show"))
              return ele.classList.remove("show")
              ele.classList.add("show")
            }}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNav">
            <ul className="navbar-nav me-auto mb-1">
              <li className="nav-item">
                <Link className="nav-link active fs-4" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              
              { localStorage.getItem("authToken") ? (
                <li className="nav-item">
                  <Link className="nav-link active fs-4" aria-current="page" to="/myOrder"> My Orders </Link>
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
      <div>
        <ToastContainer
          position="bottom-center"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
    </div>
  );
}