import { Carousel } from "react-responsive-carousel";
const fotos =[
  "https://www.instagram.com/p/CbtF35lr4ln/",

]
const ControlledCarousel=(productos)=> {
  return (
    <>
       <Carousel showThumbs={true} infiniteLoop={true} id="home">
        <div className="fotos" src={fotos[0]} ></div>
        <div className="fotos" style={{ height: "500px", color: "#000",background: "red" ,alignItems:"center"}}></div>
        <div className="fotos" style={{ height: "500px", color: "#000",background: "black" ,alignItems:"center"}}></div>
      </Carousel>
    </>
  );
}
export default ControlledCarousel;
