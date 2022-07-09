import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import './home.css'

import Video from '../assets/maldivesVideo.mp4'

import BoraBora from '../assets/borabora.jpg'
import BoraBora2 from '../assets/borabora2.jpg'
import Maldives from '../assets/maldives.jpg'
import Maldives2 from '../assets/maldives2.jpg'
import KeyWest from '../assets/keywest.jpg'

const Travel = () => {
  return (
    <div className='hero'>
            <video autoPlay loop muted id='video'>
                <source src={Video} type='video/mp4' />
            </video>
            <div className="overlay"></div>
            <div className="content">
                <h1>First Class Travel</h1>
                <h2>Top 1% Locations Worldwide</h2>
                <form className="form">
                    <div>
                        <input type="text" placeholder='Search Destinations' />
                    </div>
                    <div>
                        <button><AiOutlineSearch className='icon'/></button>
                    </div>
                </form>
            </div>
            <div className='destinations'>
            <div className='container'>
            <h1>All-Inclusive Resorts</h1>
            <h2>On the Caribbean's Best Beaches</h2>
            <div className='img-container'>
                <img className='span-3 image-grid-row-2' src={BoraBora} alt='/'/>
                <img src={BoraBora2} alt='/'/>
                <img src={Maldives} alt='/'/>
                <img src={Maldives2} alt='/'/>
                <img src={KeyWest} alt='/'/>
            </div>
        </div>
    </div>
        </div>
        
        
  )
}

export default Travel