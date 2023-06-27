import React, {useEffect, useState} from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Quality from "../components/Quality";

export default function Home() {
  const [search, setSearch] = useState('');
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);

  const loadData = async() =>{
    let response = await fetch("http://localhost:5000/api/foodData", {
      method: "POST",
      headers: {
        'Content-Type' : 'application/json'
      } 
    });

    response = await response.json();

    setFoodItem(response[0])
    setFoodCat(response[1])
    // console.log(response[0], response[1]);
  }

  useEffect(()=>{
    loadData()
  },[])

  const getFilteredCategories = () => {
    return foodCat.filter((category) =>
    foodItem.some(
      (item) =>
        item.CategoryName === category.CategoryName &&
        item.name.toLowerCase().includes(search.toLowerCase())
    )
  );
  };
  return (
    <div>
      <div>
        <Navbar />
      </div>

      <div>
        <div style={{"paddingTop":"6rem"}}></div>
        <div
          id="carouselExampleFade"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
          style={{ objectFit: "contain !important" }}            
        >
          <div className="carousel-inner" id="carousel">
            <div className="carousel-caption" style={{ zIndex: "10" }}>
              <div className="d-flex justify-content-center">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e)=>{setSearch(e.target.value)}}/>
              </div>
            </div>

            <div className="carousel-item active">
              <img
                src="https://t3.ftcdn.net/jpg/02/94/30/58/360_F_294305868_QTSSjWvyGvUCPfuH7bPuq6tBqF08hT0x.jpg"
                className="d-block w-100"
                style={{ filter: "brightness(50%)" }}
                alt="poster"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://images.squarespace-cdn.com/content/v1/5bc7496d11f7844988feb43d/1599165408168-RKXBCCBZDHT4X1JQFPUI/TKK+New+Spicy+Items_website+banner+%28Custom%29.jpg"
                className="d-block w-100"
                style={{ filter: "brightness(50%)" }}
                alt="poster"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://t3.ftcdn.net/jpg/02/46/37/08/360_F_246370873_V5G96d4DmpADNvCLDIdqDljnAvl7Jcif.jpg"
                className="d-block w-100"
                style={{ filter: "brightness(50%)" }}
                alt="poster"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://luckyboatnoodles.co.uk/wp-content/uploads/2020/03/10557-LB-Web_Recipe-KingPrawnCM.jpg.webp"
                className="d-block w-100"
                style={{ filter: "brightness(50%)" }}
                alt="poster"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://www.getflavor.com/wp-content/uploads/2022/03/Coming-in-Hot-Loaded-Fries-Hero-Banner.png"
                className="d-block w-100"
                style={{ filter: "brightness(50%)" }}
                alt="poster"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://cdn.shopify.com/s/files/1/2446/6407/articles/biryani_banner.png?v=1666954821"
                className="d-block w-100"
                style={{ filter: "brightness(50%)" }}
                alt="poster"
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div>
        <Quality/>
      </div>

      <div className='container'>
        {
          foodCat !==[]
          ? getFilteredCategories().map((data)=>{
            return ( <div className='row mb-3'>
            <div key={data._id} className="fs-3 m-3">{data.CategoryName}</div>
            <hr/>
            {foodItem !== []
            ?
            foodItem.filter((item)=> (item.CategoryName === data.CategoryName)&& (item.name.toLowerCase().includes(search.toLowerCase())))
            .map(filterItems=>{
              return(
                <div key={filterItems._id} className="col-12 col-md-6 col-lg-3">
                  <Card foodItem = {filterItems}
                  options={filterItems.options[0]}
                  desc={filterItems.description}></Card>
                </div>
              )
            })
            :<div>No such data found!</div>}
            </div>
            )
          })
          :""
        }
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}
