import { CLOTHING } from '../../static/helper/constant'
import ClothingCarousel from '../common/Carousel'
function CurrentCloset() {
    return (
        <ClothingCarousel items={CLOTHING} />
    );
}

export default CurrentCloset;