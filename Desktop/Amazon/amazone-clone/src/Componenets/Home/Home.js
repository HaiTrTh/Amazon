import React from 'react'
import Product from '../Product/Product'
import "./Home.css"

function Home() {
  return (
    <div className="home__container">
      <div className="home">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg"
        >
        </img>
        <div className="home__row">
          <Product
            id="1"
            title="The lean startup2"
            image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
            price={39}
            raiting={5}
          />
          <Product
            id="2"
            title="The lean startup3"
            image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
            price={39}
            raiting={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="3"
            title="The lean startup4"
            image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
            price={39}
            raiting={5}
          />
          <Product
            id="4"
            title="The lean startup5"
            image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
            price={39}
            raiting={5}
          />
          <Product
            id="5"
            title="The lean startup6"
            image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
            price={39}
            raiting={5}
          />

        </div>
        <div className="home__row">
          <Product
            id="6"
            title="The lean startup7"
            image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
            price={39}
            raiting={5}
          />

        </div>

      </div>

    </div >
  )
}

export default Home