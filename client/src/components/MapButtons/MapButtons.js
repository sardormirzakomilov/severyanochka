import React from 'react'
import classes from './MapButtons.module.css'

const MapButtons = ({text}) => {
  return (
    <div className={classes.MapButtonss}>
        <button className={classes.MapButton}>{text.text}</button>
    </div>
  )
}

export default MapButtons