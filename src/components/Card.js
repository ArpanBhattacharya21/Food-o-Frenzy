import React, { useEffect, useRef, useState } from "react";
import { useDispatchCart, useCart } from "./contextReducer";
import { Modal } from 'react-bootstrap';

export default function Card(props) {
  let dispatch = useDispatchCart();
  let data = useCart();
  const priceRef = useRef();
  let options = props.options;
  let priceOptions= Object.keys(options);
  const [qty, setQty] = useState(1)
  const [size, setSize] = useState("")
  const [show, setShow] = useState(false);
  const [modalData, setModalData] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleAddToCart = async () => {
    let food = []
    for (const item of data) {
      if (item.id === props.foodItem._id) {
        food = item;

        break;
      }
    }
    console.log(food)
    console.log(new Date())
    if (food !== []) {
      if (food.size === size) {
        await dispatch({ type: "UPDATE", id: props.foodItem._id, price: finalPrice, qty: qty })
        return
      }
      else if (food.size !== size) {
        await dispatch({ type: "ADD", id: props.foodItem._id, name: props.foodItem.name, price: finalPrice, qty: qty, size: size, })
        //console.log("Size different so simply ADD one more to the list")
        return
      }
      return
    }
    await dispatch({ type: "ADD", id: props.foodItem._id, name: props.foodItem.name, price: finalPrice, qty: qty, size: size })
    // setBtnEnable(true)
  }



  let finalPrice = qty * parseInt(options[size]);
  
  useEffect(()=>{
    setSize(priceRef.current.value);

    fetch(`http://localhost:5000/api/foodData/${props.foodItem._id}`) // Replace with your actual API endpoint URL
      .then((response) => response.json())
      .then((data) => {
        setModalData(data);
      })
      .catch((error) => {
        console.error("Failed to fetch modal data:", error);
      });
  }, [props.foodItem._id]);

  
  return (
    <div className="card_main_container"> 
        <span><img src={props.foodItem.img} className="card-img-top" alt="..." style={{ height:"10rem",  objectFit:"cover"}} onClick={handleShow}/> </span>
      <div className="card_main_inner">
        <span className="card_main_header">
        <h5 className="card-title item_food_card_title">{props.foodItem.name}</h5>
        </span>
        <div style={{
          minHeight: "5rem"
        }}>
        <p className="item_food_cards">{props.desc}</p>  
        </div>
         <div className="card_footer_container ">
              <select className="bg-warning rounded cards_item_select" onChange={(e)=> setQty(e.target.value) }>
                 {Array.from(Array(6), (e, i) => {
                   return (
                     <option key={i + 1} value={i + 1}>
                       {i + 1}
                     </option>
                   );
                 })}
               </select>
               <select className="bg-warning rounded cards_item_select" ref={priceRef} onChange={(e)=> setSize(e.target.value) }>
                 {priceOptions?.map((data)=>{
                   return <option key={data} value={data}>{data}</option>
                 })}
               </select>

               <div className="">
                 ₹{finalPrice}/-
               </div>
             </div>
                 <hr />
        <div className="card_footer_button">
        <button className={'btn btn-warning justify-center'} onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </div>
      <Modal show={show}>
        <Modal.Header closeButton onClick={handleClose}>
          <Modal.Title>{props.foodItem?.name}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <img src={props.foodItem?.img} width={'100%'} height={300} alt="Modal Image" />
          <p></p>
          <p>{props?.desc}</p>
        </Modal.Body>

        <Modal.Footer>
          <button className="btn btn-warning" onClick= {handleClose}>CLOSE</button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
