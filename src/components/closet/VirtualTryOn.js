
import ClothingCarousel from '../common/Carousel'
import React from 'react';

export default function VirtualTryOn({ marketClothes, loading }) {

    return (
        <div className='posts'>
            <div className="container">
                {
                    !loading ? (
                        <><h1>Dress</h1><ClothingCarousel items={marketClothes} closet={false} /></>
                    ) : (
                        <div>Loading...</div>
                    )
                }
            </div>
        </div>
    )
}
