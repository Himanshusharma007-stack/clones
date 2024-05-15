import Navbar from "../components/Navbar";
import CarouselComp from "../components/Carousel";
import Card from "../components/Card";

let cardData = {
    heading: "Appliances for your home | Up to 55% off",
    img1: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-372x232----B08RDL6H79._SY232_CB667322346_.jpg",
    img1Name: "Air Conditioners",
    img2: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/B08345R1ZW---372x232._SY232_CB667322346_.jpg",
    img2Name: "Refrigerators",
    img3: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/B07G5J5FYP._SY232_CB667322346_.jpg",
    img3Name: "Microwaves",
    img4: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08CPQVLZT._SY232_CB667322346_.jpg",
    img4Name: "Washing Machines",
  }

export default function Homepage() {
  return (
    <div>
      <Navbar />
      <div className="">
      <CarouselComp />
      <div className="grid grid-cols-4 mx-auto">
        <Card data={cardData} />
        <Card data={cardData} />
        <Card data={cardData} />
        <Card data={cardData} />
      </div>
      </div>
    </div>
  );
}
