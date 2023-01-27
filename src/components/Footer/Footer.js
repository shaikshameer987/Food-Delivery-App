import React from 'react'
import "./Footer.css"
import {FaPinterestSquare} from "react-icons/fa"
import {BsInstagram} from "react-icons/bs"
import {BsTwitter} from "react-icons/bs"
import {AiOutlineFacebook} from "react-icons/ai"


function Footer() {
    return (
        <footer className='footer'>
            <div className='footer_brand_div'>
                <img
                    className='footer_brand_logo'
                    src='https://res.cloudinary.com/dllshtsed/image/upload/v1670287415/Frame_274_vkglt2.png'
                    alt='brand'
                />
                <p className='footer_brand_title'><i>Tasty Kitchens</i></p>
            </div>
            <div className='footer_text_div'>
                <p className='footer_text'>The only thing we are serious about is food.Contact us on</p>
            </div>
            <div className='social_media_links'>
                <ul>
                    <li><FaPinterestSquare className='icons'/></li>
                    <li><BsInstagram className='icons'/></li>
                    <li><BsTwitter className='icons'/></li>
                    <li><AiOutlineFacebook className='icons'/></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer
