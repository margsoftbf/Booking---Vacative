import React from 'react'
import style from './FeaturedProperties.module.css'

function FeaturedProperties(props) {
  return (
    <div className={`${style.itemsContainer}`}>
      <div className={`${style.item}`}>
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1"
          alt=""
          className={`${style.itemImg}`}
        />
        <div className={`${style.bottomSection}`}>
        <div className={`${style.leftSection}`}>
          <span className={`${style.itemName}`}>Apart hotel</span>
          <span className={`${style.itemCity}`}>Madrid</span>
          <span className={`${style.itemPrice}`}>Starting from $120</span>
          </div>
          <div className={`${style.itemRating}`}>
            <button>8.9</button>
            <span>Excellent</span>
          </div>
        </div>
      </div>
      <div className={`${style.item}`}>
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/215955381.jpg?k=ff739d1d9e0c8e233f78ee3ced82743ef0355e925df8db7135d83b55a00ca07a&o=&hp=1"
          alt=""
          className={`${style.itemImg}`}
        />
        <div className={`${style.bottomSection}`}>
        <div className={`${style.leftSection}`}>
        <span className={`${style.itemName}`}>Marriot Hotel</span>
        <span className={`${style.itemCity}`}>Austin</span>
        <span className={`${style.itemPrice}`}>Starting from $140</span>
        </div>
        <div className={`${style.itemRating}`}>
          <button>9.3</button>
          <span>Exceptional</span>
        </div>
        </div>
      </div>
      <div className={`${style.item}`}>
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/232902339.jpg?k=3947def526b8af0429568b44f9716e79667d640842c48de5e66fd2a8b776accd&o=&hp=1"
          alt=""
          className={`${style.itemImg}`}
        />
        <div className={`${style.bottomSection}`}>
          <div className={`${style.leftSection}`}>
        <span className={`${style.itemName}`}>Four Seasons</span>
        <span className={`${style.itemCity}`}>Lisbon</span>
        <span className={`${style.itemPrice}`}>Starting from $99</span>
        </div>
        <div className={`${style.itemRating}`}>
          <button>8.8</button>
          <span>Excellent</span>
        </div>
        </div>
      </div>
      <div className={`${style.item}`}>
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/322658536.jpg?k=3fffe63a365fd0ccdc59210188e55188cdb7448b9ec1ddb71b0843172138ec07&o=&hp=1"
          alt=""
          className={`${style.itemImg}`}
        />
        <div className={`${style.bottomSection}`}>
        <div className={`${style.leftSection}`}>
        <span className={`${style.itemName}`}>Hilton Garden</span>
        <span className={`${style.itemCity}`}>Berlin</span>
        <span className={`${style.itemPrice}`}>Starting from $105</span>
        </div>
        <div className={`${style.itemRating}`}>
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      </div>
    </div>
  )
}


export default FeaturedProperties

