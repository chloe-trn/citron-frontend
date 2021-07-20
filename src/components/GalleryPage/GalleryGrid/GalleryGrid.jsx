import React from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';

function GalleryGrid({images, instaLogo}){
    
    const handleInstaPostClick = () => {
        alert("Clicking on the instagram logo would lead to the post of the image. This is a test site so no instagram account is available.");
    }
    const handleInstaHandleClick = () => {
        alert("Clicking here would lead to Citron Cafe's instagram page. This is a test site so no instagram account is available.");
    }
    return(
        <main className="gallery-container">
            <h2 onClick={handleInstaHandleClick}>@citron-cafe.co</h2>
            <section className="gallery" aria-label="Selected images from Citron Café's instagram account">
                {
                    images.map((image,index) => 
                        <div className={"post img"+(index+1)} key={image} aria-label="Selected Citron Café instagram post">
                            <LazyLoadImage effect="opacity" className={"gallery-img img"+(index+1)} src={image} alt=""/>
                            <div className="wrapper">
                            <LazyLoadImage effect="opacity" className="insta-logo" src={instaLogo} alt="Instagram logo" onClick={handleInstaPostClick}/>
                            </div>
                        </div>
                    )
                }
            </section>
        </main>
    );
}

export default GalleryGrid