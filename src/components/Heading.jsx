import React from 'react'
import logo from "../assets/logoYellow.png"

const Heading = () => {
    return (
        <div className='heading-container'>
            <img src={logo} alt="logo" />
            <div className="heading-text-container">
                <h1>3D Print Price Calculator</h1>
                <p>CALCULATE THE AVERAGE PRICE OF YOUR 3D PRINT PROJECT</p>
            </div>
        </div>
    )
}

export default Heading