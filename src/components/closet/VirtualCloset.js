import ClothingCarousel from '../common/Carousel'
import React from 'react';


export default function VirtualCloset({ closetClothes, loading }) {

  return (
    <div className='posts'>
      <div className="container">
        {
          !loading ? (
            <><h1>Dress</h1><ClothingCarousel items={closetClothes} closet={true} /></>
          ) : (
            <div>Loading...</div>
          )
        }
      </div>
    </div>
  )
}
