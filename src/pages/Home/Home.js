import React from 'react'
import style from './Home.module.css'
import Featured from '../../components/Featured/Featured';
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import PropertyList from '../../components/PropertyList/PropertyList';
import FeaturedProperties from '../../components/FeaturedProperties/FeaturedProperties';
import { MailList } from '../../components/MailList/MailList';
import Footer from '../../components/Footer/Footer';

function Home(props) {
  return (
    <>
      <Navbar />
      <Header />
      <div className={`${style.homeContainer}`}>
        <Featured />
        <h1 className={`${style.homeTitle}`}>Browse by property type</h1>
        <PropertyList />
        <h1 className={`${style.homeTitle}`}>Home guests love</h1>
        <FeaturedProperties />
        <MailList />
        <Footer />
      </div>
    </>
  )
}



export default Home
