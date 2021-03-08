import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/Multititle/Feb/EN/1500x600_Hero-Tall_NP._CB657651956_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="12321341"
            title="Great Stories for Children Paperback – 1 November 2011"
            price={128.0}
            rating={4}
            image={
              "https://images-na.ssl-images-amazon.com/images/I/51H2M2jWmvL._SX311_BO1,204,203,200_.jpg"
            }
          />
          <Product
            id="49538094"
            title="AmazonBasics 650 Watt Drip Coffee Maker with Borosilicate Carafe"
            price={1189.0}
            rating={3}
            image={
              "https://images-na.ssl-images-amazon.com/images/I/81lwV-pZGJL._SL1500_.jpg"
            }
          />
        </div>

        <div className="home__row">
          <Product
            id="49038850"
            title="Mi TV 4A PRO 80 cm Android LED TV "
            price={14499.0}
            rating={4}
            image={
              "https://images-na.ssl-images-amazon.com/images/I/71qOOWyfc7L._SL1500_.jpg"
            }
          />
          <Product
            id="78635941"
            title="Echo Dot | Next generation smart speaker "
            price={3999.0}
            rating={4}
            image={
              "https://images-na.ssl-images-amazon.com/images/I/61MbLLagiVL._SL1000_.jpg"
            }
          />
          <Product
            id="56984125"
            title="Apple iPhone 12 Mini Blue, 128GB Storage"
            price={71900.0}
            rating={5}
            image={
              "https://images-na.ssl-images-amazon.com/images/I/71sNNCTfMuL._SL1500_.jpg"
            }
          />
        </div>

        <div className="home__row">
          <Product
            id="36984525"
            title="Samsung 34-inch (86.40cm) Curved Monitor- 21:9 Ultrawide QLED, Thunderbolt 3 Por"
            price={87990.0}
            rating={4}
            image={
              "https://images-na.ssl-images-amazon.com/images/I/91dNqU4nKRL._SL1500_.jpg"
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
