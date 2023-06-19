import React from "react";
import Delete from '@material-ui/icons/Delete';
import { useDispatchCart, useCart } from "../components/contextReducer";

export default function Cart() {
  let data = useCart();
  let dispatch = useDispatchCart();

  if (data?.length === 0 ) {
    return (
      <div>
        <div className="m-5 w-100 text-center fs-3">The Cart is Empty</div>
      </div>
    );
  }

  let totalPrice = data.reduce((total, food) => total + food.price, 0);
 
  const handleCheckOut = async () => {
    
        // const {data:{key}}=await api.getRazorpayKey();
        //const key = "rzp_test_1DP5mmOlF5G5ag";  //test_key
        const key = "rzp_test_Ohr4hbU205nQNl";  //test_key
        let userEmail = localStorage.getItem("userEmail");
        const options = {
          key: key,
          amount: totalPrice * 100,
          currency: "INR",
          name: 'Food-o-Frenzy',
          description: "Pay to Food-o-Frenzy",
          // image: "https://picsum.photos/200",
          handler: async function (responses) {
            // // console.log(response);
            // console.log(response);
            // state.razorpay_payment_id = response.razorpay_payment_id;
            // dispatch(placeOrder(state, navigateToThankyou));
            // console.log(data,localStorage.getItem("userEmail"),new Date())
            let response = await fetch("http://localhost:5000/api/orderData", {
              // credentials: 'include',
              // Origin:"http://localhost:3000/login",
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                order_data: data,
                email: userEmail,
                order_date: new Date().toDateString()
              })
            });
        
            console.log("JSON RESPONSE:::::", response.status)
        
            if (response.status === 200) {
              dispatch({ type: "DROP" })
            }
          },
          prefill: {
            name: userEmail.split('@')[0],
            email: userEmail,
            contact: "",
          },
          notes: {
            address: "",
          },
        };
        const rzp1 = new window.Razorpay(options);
        rzp1.open();
      



    
  }

  return (
    <div>
      <div className="container m-auto mt-5 tabel-responsive table-responsive-sm table-responsive-md">
        <table className="table table-hover ">
          <thead className=" text-dark fs-4">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Quantity</th>
              <th scope="col">Option</th>
              <th scope="col">Amount</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {data?.map((food, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{food.name}</td>
                <td>{food.qty}</td>
                <td>{food.size}</td>
                <td>{food.price}</td>
                <td>
                  <button type="button" className="btn p-0">
                    <Delete
                      onClick={() => {
                        dispatch({ type: "REMOVE", index: index });
                      }}
                    />
                  </button>{" "}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div>
          <h1 className="fs-2">Total Price: {totalPrice}/-</h1>
        </div>
        <div>
          <button className="btn bg-warning mt-5" onClick={handleCheckOut}>
            {" "}
            Check Out{" "}
          </button>
        </div>
      </div>
    </div>
  );
}
