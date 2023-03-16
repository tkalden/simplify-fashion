
import ClothingCarousel from '../common/Carousel'
import ClothContext from '../../context/clothContext';
import { useContext } from 'react';
import { groupBy } from '../../static/helper/groupBy';


export default function VirtualTryOn() {
    const clothContext = useContext(ClothContext);
    const { marketClothes, loading } = clothContext;
    const groupedClothes = groupBy(marketClothes, 'type')
    return (
        <div className='posts'>
            <div className="container">
                <h1>Clothing From Markets</h1>
                {
                    !loading ? (
                        Object.entries(groupedClothes)
                            .map(([key, value]) =>
                                <><h1>{key}</h1><ClothingCarousel items={value} closet={false} /></>
                            )) : (
                        <div>Loading...</div>
                    )
                }
            </div>
        </div>
    )
}
