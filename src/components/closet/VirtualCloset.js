import ClothingCarousel from '../common/Carousel'
import ClothContext from '../../context/clothContext';
import { useContext } from 'react';
import { groupBy } from '../../static/helper/groupBy';

export default function VirtualCloset() {
  const clothContext = useContext(ClothContext);
  const { closetClothes, loading } = clothContext;
  const groupedClothes = groupBy(closetClothes, 'type')
  return (
    <div className='posts'>
      <div className="container">
        {
          !loading ? (
            Object.entries(groupedClothes)
              .map(([key, value]) =>
                <><h1>{key}</h1><ClothingCarousel items={value} closet={true} /></>
              )) : (
            <div>Loading...</div>
          )
        }
      </div>
    </div>
  )
}
