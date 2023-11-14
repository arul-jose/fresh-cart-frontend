import React from 'react'
import StarRatings from 'react-star-ratings';

export default function Product(props) {
    const x = props.selectedProduct;
    return (
        <div className="Product">
            <button onClick={props.clickOnBack}>Back</button>
            <div>
                <div >
                    <h3><span>{x.title}</span></h3>
                    <h3><span>{x.type}</span></h3>
                    <h4><span>Rs.{x.price}</span></h4>
                    <h4><span>Rating:{x.rating}</span></h4>
                    <h4><span>{x.filename}</span></h4>
                    <StarRatings
                        rating={x.rating}
                        starRatedColor="yellow"
                        numberOfStars={5}
                        name='rating'
                    />
                </div>
            </div>
        </div>
    )
}
