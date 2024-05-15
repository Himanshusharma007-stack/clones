import { Carousel } from "flowbite-react";

export default function CarouselComp() {
  return (
    <>
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel indicators={false} slideInterval={3000}>
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG24/Smart_Watches/3000X1200_New_Launch_March_hero1._CB580055456_.jpg"
            alt="..."
            className="pt-48"
          />
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img24/Beauty/MayART/GW/updated/final/Makeup-PCfrer._CB557036780_.jpg"
            alt="..."
            className="pt-48"
          />
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Consumables/X-GL/Feb5/PC_Hero_1_3000._CB582457311_.jpg"
            alt="..."
            className="pt-48"
          />
        </Carousel>
      </div>
    </>
  );
}
