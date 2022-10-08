import React from 'react'
import style from './Featured.module.css'

function Featured(props) {
    return (
        <div className={`${style.container}`}>
            <div className={`${style.featuredItem}`}>
                <div className={`${style.featuredImgBox}`}>
                    <div className={`${style.featuredImgShadow}`}></div>
                    <img className={`${style.featuredImg}`} src="https://cdn.pixabay.com/photo/2015/11/18/16/14/dublin-1049427_960_720.jpg" alt="" /></div>
                <div className={`${style.featuredTitle}`}>
                    <h1>Dublin</h1>
                    <h2>123 properties</h2>
                </div>
            </div>
            <div className={`${style.featuredItem}`}>
                <div className={`${style.featuredImgBox}`}>
                    <div className={`${style.featuredImgShadow}`}></div>
                    <img className={`${style.featuredImg}`} src="https://cdn.pixabay.com/photo/2016/04/04/00/58/las-vegas-1306002_960_720.jpg" alt="" /></div>
                <div className={`${style.featuredTitle}`}>
                    <h1>Las Vegas</h1>
                    <h2>321 properties</h2>
                </div>
            </div>
            <div className={`${style.featuredItem}`}>
                <div className={`${style.featuredImgBox}`}>
                    <div className={`${style.featuredImgShadow}`}></div>
                    <img className={`${style.featuredImg}`} src="https://cdn.pixabay.com/photo/2018/06/08/12/58/royal-3462249_960_720.jpg" alt="" /></div>
                <div className={`${style.featuredTitle}`}>
                    <h1>Madrid</h1>
                    <h2>123 properties</h2>
                </div>
            </div>
        </div>
    )
}



export default Featured
