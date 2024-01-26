import '../styles/ImageCarousel.css';

function ImageCarousel() {
  return (
    <div className='carousel'>
      <div className='carousel-image'>
        <img
          src='https://res.cloudinary.com/angelrodriguez/image/upload/v1706296495/Santa%20Carla%20Surf/billboard-closeup.jpg'
          alt='Billboard of Santa Carla'
        />
      </div>
      <div className='carousel-image'>
        <img
          src='https://res.cloudinary.com/angelrodriguez/image/upload/v1706296685/Santa%20Carla%20Surf/santa-carla-coaster2.jpg'
          alt='Coaster Image 2'
        />
      </div>
      <div className='carousel-image'>
        <img
          src='https://res.cloudinary.com/angelrodriguez/image/upload/v1706296273/Santa%20Carla%20Surf/boardwalk-sign.jpg'
          alt='Boardwalk Sign'
        />
      </div>
      <div className='carousel-image'>
        <img
          src='https://res.cloudinary.com/angelrodriguez/image/upload/v1706296771/Santa%20Carla%20Surf/tour-image.jpg'
          alt='Tour Image'
        />
      </div>
      <div className='carousel-image'>
        <img
          src='https://res.cloudinary.com/angelrodriguez/image/upload/v1706296336/Santa%20Carla%20Surf/billboard-illustrated.jpg'
          alt='Illustrated Billboard'
        />
      </div>
      <div className='carousel-image'>
        <img
          src='https://res.cloudinary.com/angelrodriguez/image/upload/v1706296235/Santa%20Carla%20Surf/lighthouse-coast.jpg'
          alt='Lighthouse Coast'
        />
      </div>
      <div className='carousel-image'>
        <img
          src='https://res.cloudinary.com/angelrodriguez/image/upload/v1706296201/Santa%20Carla%20Surf/boardwalk-daytime.jpg'
          alt='Boardwalk Daytime'
        />
      </div>
      <div className='carousel-image'>
        <img
          src='https://res.cloudinary.com/angelrodriguez/image/upload/v1706296068/Santa%20Carla%20Surf/santa-carla-coaster.jpg'
          alt='Coaster Image 1'
        />
      </div>
    </div>
  );
}

export default ImageCarousel;
