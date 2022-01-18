import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import TrendSelectionBox from '../components/TrendSelectionBox'
import useHomeStyles from '../styles/homeStyle.pages'
import TrendDisplayBox from '../components/TrendDisplayBox'

const Home = () => {
    const classes = useHomeStyles()
    return (
        <>
          <Navbar/>  
          <div className={classes.main}>
          <TrendSelectionBox/>
          <TrendDisplayBox/>
          </div>
          <Footer/>
        </>
    )
}

export default Home
