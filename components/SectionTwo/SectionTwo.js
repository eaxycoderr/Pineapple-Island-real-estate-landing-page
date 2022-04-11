import Image from "next/image";
import sectionTwoMobileBottom from '../../public/assets/Why-Choose-Pineapple-Island-2.png'

export default function SectionTwo () {
  return (
    <div className="section-two-container">
      <div className="section-two container">
        <div className="section-two-left">
          <h2>Why Choose Pineapple Island</h2>
          {/* <h2>About <br />Pineapple Island</h2> */}
        </div>
        <div className="section-two-middle">
          <p>
            Pineapple Island is the most sought-after  community in Ibadan that values and puts the needs of their clients first. It is a territory with loft complexes that creates a country life and homely feeling that is integrated with industrial development. A perfect, professional built  abode that gives you the true taste of beauty and happiness.
          </p>
        </div>
        <div className="section-two-right" />
      </div>
      <div className="section-two-mobile container">
        <div className="section-two-mobile-header">
        <h2>Why Choose Pineapple Island</h2>
        </div>
        <div className="section-two-mobile-middle">
          <p>
            Pineapple Island is the most sought-after  community in Ibadan that values and puts the needs of their clients first. It is a territory with loft complexes that creates a country life and homely feeling that is integrated with industrial development. A perfect, professional built  abode that gives you the true taste of beauty and happiness.
          </p>
        </div>
        <div className="section-two-mobile-bottom">
          <Image src={sectionTwoMobileBottom} alt="sectionTwoMobileBottom" />
        </div>
      </div>
    </div>
  );
}
