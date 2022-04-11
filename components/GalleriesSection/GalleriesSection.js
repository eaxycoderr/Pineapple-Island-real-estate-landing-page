import Image from 'next/image';

import gallery1 from '../../public/assets/PineappleIslan/1.png';
import gallery2 from '../../public/assets/PineappleIslan/2.png';
import gallery3 from '../../public/assets/PineappleIslan/3.png';
import gallery4 from '../../public/assets/PineappleIslan/4.png';
import gallery5 from '../../public/assets/PineappleIslan/5.jpg';
import gallery6 from '../../public/assets/PineappleIslan/6.png';
import gallery7 from '../../public/assets/PineappleIslan/7.png';
import gallery8 from '../../public/assets/PineappleIslan/8.png';
import gallery9 from '../../public/assets/PineappleIslan/9.png';
import gallery10 from '../../public/assets/PineappleIslan/10.jpg';
import gallery11 from '../../public/assets/PineappleIslan/11.jpg';

const galleriesImages = [
  {
    image: gallery1,
  },
  {
    image: gallery2,
  },
  {
    image: gallery3,
  },
  {
    image: gallery4,
  },
  {
    image: gallery5,
  },
  {
    image: gallery6,
  },
  {
    image: gallery7,
  },
  {
    image: gallery8,
  },
  {
    image: gallery9,
  },
];

export default function GalleriesSection () {
  return (
    <div className="GalleriesSection-container">
      <div className="GalleriesSection container">
        <div className="Galleries-title">
          <h2>Galleries</h2>
        </div>
        <div className="Galleries-subtitle">
          <p>
            a community that gives you a taste of happiness, a place you’ll love to live and an opportunity to build a home.
          </p>
        </div>

        <div className="Galleries-images">
          <div><Image src={gallery1} alt="gallery1" /></div>
          <div><Image src={gallery2} alt="gallery2" /></div>
          <div><Image src={gallery3} alt="gallery3" /></div>
          <div><Image src={gallery4} alt="gallery4" /></div>
          <div><Image src={gallery5} alt="gallery5" /></div>
          <div><Image src={gallery6} alt="gallery6" /></div>
          <div><Image src={gallery7} alt="gallery7" /></div>
          <div><Image src={gallery8} alt="gallery8" /></div>
          <div><Image src={gallery9} alt="gallery9" /></div>
        </div>

      </div>

      <div className="GalleriesSection-mobile container">
        <div className="Galleries-title">
          <h2>Available Homes</h2>
        </div>
        <div className="Galleries-subtitle">
          <p>
            a community that gives you a taste of happiness, a place you’ll love to live and an opportunity to build a home.
          </p>
        </div>

        <div className="Galleries-images">
          <div className="grid1">
            <div><Image src={gallery11} alt="gallery11" /></div>
            <div><Image src={gallery2} alt="gallery2" /></div>
            <div><Image src={gallery3} alt="gallery3" /></div>
            <div><Image src={gallery10} alt="gallery10" /></div>
          </div>

          <div className="grid2">
            <div className="left">
              <div><Image src={gallery5} alt="gallery5" /></div>
              <div><Image src={gallery6} alt="gallery6" /></div>
            </div>
            <div className="right" />
          </div>
          <div className="grid3">
            <div className="left" />
            <div className="right">
              <div><Image src={gallery5} alt="gallery5" /></div>
              <div><Image src={gallery6} alt="gallery6" /></div>
            </div>
          </div>
          <div className="grid4">
            <div><Image src={gallery1} alt="gallery1" /></div>
            <div><Image src={gallery4} alt="gallery4" /></div>
          </div>
          <div className="bottom-image" />
        </div>

      </div>
    </div>
  );
}
