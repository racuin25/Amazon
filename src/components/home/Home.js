import React from "react";
import { products, bannerImg } from "../../products";
import Product from "../product/Product";
import "./Home.css";

function Home() {
    return(
        <div className="home">
            <img className="home__image" src={bannerImg} alt="" />

            {/*product id, title, price, rating */}
            <div className="home__row">
                {products.map(item => {
                    return (
                        <Product
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    )
                })}
            </div>
        </div>
    );
}

export default Home;