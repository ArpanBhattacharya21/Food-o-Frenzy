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
    // <div>
    //   <div>
    //     <div
    //       className="card mt-3 border-secondary"
    //       style={{ width: "18rem", maxHeight: "30rem", border: '10px solid red' }}
    //     >
    //       <img src={props.foodItem.img} className="card-img-top" alt="..." style={{ height:"10rem",  objectFit:"cover"}}/>
    //       <div className="card-body" style={{
    //         height: "18rem"
    //       }}>
    //         <h5 className="card-title" style={{
    //           textAlign: "center"
    //         }}>{props.foodItem.name}</h5>
    //         <p className="card-text item_food_cards" style={{
    //           minHeight: "4rem"
    //         }}>{props.desc}</p>
    //         <div className="container w-100">
    //           <select className="m-2 h-100 bg-warning rounded" onChange={(e)=> setQty(e.target.value) }>
    //             {Array.from(Array(6), (e, i) => {
    //               return (
    //                 <option key={i + 1} value={i + 1}>
    //                   {i + 1}
    //                 </option>
    //               );
    //             })}
    //           </select>
    //           <select className="m-2 h-100 bg-warning rounded" ref={priceRef} onChange={(e)=> setSize(e.target.value) }>
    //             {priceOptions?.map((data)=>{
    //               return <option key={data} value={data}>{data}</option>
    //             })}
    //           </select>

    //           <div className="d-inline h-100 fs-5">
    //             ₹{finalPrice}/-
    //           </div>
    //         </div>
    //         <hr></hr>
            
    //       </div>
    //       <div style={{
    //           display: "flex",
    //           justifyContent: 'center',
    //           alignItems: 'center',
              
    //         }}>

    //         <button className={'btn btn-warning justify-center ms-2 w-100'} onClick={handleAddToCart}>Add to Cart</button>
    //         </div>
    //     </div>
    //   </div>
    // </div>
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
        <Modal.Header closeButton>
          <Modal.Title>{modalData?.name}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>{modalData?.description}</p>
          <img src={modalData?.image} alt="Modal Image" />
        </Modal.Body>

        <Modal.Footer>
          <button className="btn" onClick= {handleClose}>CLOSE</button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
