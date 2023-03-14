import ClothingCarousel from '../common/Carousel'

export default function VirtualCloset({ currentClothing }) {

  return (
    <div>
      <ClothingCarousel items={currentClothing} />
    </div>
  );
}

