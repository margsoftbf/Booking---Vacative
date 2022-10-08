import React from 'react'
import style from './PropertyList.module.css'

function PropertyList(props) {
    return (
        <div className={`${style.container}`}>
            <div className={`${style.propertyListItem}`}>
                <img className={`${style.propertyListImg}`} src="https://cdn.pixabay.com/photo/2020/10/18/09/16/bedroom-5664221_960_720.jpg" alt="" />
                <div className={`${style.propertyListTitles}`}>
                    <h1>Hotels</h1>
                    <h2>233 hotels</h2>
                </div>
            </div>
            <div className={`${style.propertyListItem}`}>
                <img className={`${style.propertyListImg}`} src="https://cdn.pixabay.com/photo/2016/11/22/23/38/apartment-1851201_960_720.jpg" alt="" />
                <div className={`${style.propertyListTitles}`}>
                    <h1>Apartaments</h1>
                    <h2>290 apartments</h2>
                </div>
            </div>
            <div className={`${style.propertyListItem}`}>
                <img className={`${style.propertyListImg}`} src="https://cdn.pixabay.com/photo/2019/11/28/19/19/landscape-4659922_960_720.jpg" alt="" />
                <div className={`${style.propertyListTitles}`}>
                    <h1>Resorts</h1>
                    <h2>702 resorts</h2>
                </div>
            </div>
            <div className={`${style.propertyListItem}`}>
                <img className={`${style.propertyListImg}`} src="https://cdn.pixabay.com/photo/2020/03/21/20/03/real-estate-4955086_960_720.jpg" alt="" />
                <div className={`${style.propertyListTitles}`}>
                    <h1>Villas</h1>
                    <h2>921 villas</h2>
                </div>
            </div>
            <div className={`${style.propertyListItem}`}>
                <img className={`${style.propertyListImg}`} src="https://cdn.pixabay.com/photo/2012/11/13/18/50/enlighted-65961_960_720.jpg" alt="" />
                <div className={`${style.propertyListTitles}`}>
                    <h1>Cabin</h1>
                    <h2>715 cabins</h2>
                </div>
            </div>
            <div className={`${style.propertyListItem}`}>
                <img className={`${style.propertyListImg}`} src="https://cdn.pixabay.com/photo/2017/09/22/14/20/lake-2775717_960_720.jpg" alt="" />
                <div className={`${style.propertyListTitles}`}>
                    <h1>Lake</h1>
                    <h2>503 lakes</h2>
                </div>
            </div>
        </div>
    )
}



export default PropertyList
