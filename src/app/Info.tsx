'use client'
import React from 'react';
import './page.css'

function Info({center, color, id}) {
    console.log(center)
    return (
        <div className={"info " + color} id={id}>
            <div className="upper">
                <div className="upperImgContainer">
                    <img src={center.photo2} alt=""/>
                </div>
                <div className="description">
                    <div className="descriptionHeader">
                        {center.name}
                    </div>
                    <div className="descriptionText">
                        <pre dangerouslySetInnerHTML={{__html: center.infoDescription}}></pre>
                    </div>
                </div>
            </div>
            <div className="bottom">
                <div className="scoreContainer">
                    {center.score}
                </div>
                {center.reviews.map(review => (
                    <div className="review" key={review.name}>
                        <div className="reviewHeader">{review.name}</div>
                        <div className="reviewContent">
                            <div className="reviewStars">
                                {Array.from({length: review.rating}, (_, i) => (
                                    <img src="/star.png" alt="" key={i}/>
                                ))}
                            </div>
                            <div className="reviewText">
                                {review.text}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Info;