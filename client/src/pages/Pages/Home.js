import React from 'react'
import Aktsii from '../HomePage/Aktsii/Aktsii'
import HeaderHome from '../HomePage/Header/HeaderHome'
import Location from '../HomePage/Location/Location'
import Novinki from '../HomePage/Novinki/Novinki'
import PokupkaRan from '../HomePage/PokupkaRan/PokupkaRan'
import Preloj from '../HomePage/Predloj/Predloj'
import Sitate from '../HomePage/Sitate/Sitate'

const Home = ({cards}) => {
  return (
    <div>
        <HeaderHome/>
        <Aktsii/>
        <Novinki/>
        <PokupkaRan/>
        <Preloj/>
        <Location/>
        <Sitate/> 
       
    </div>
  )
}

export default Home