import ControlledCarousel from "./ControlledCarousel/ControlledCarousel";
import QuienesSomos from "./QuienesSomos/QuienesSomos";
import Servicios from "./Servicios/Servicios";

const Nav = () => {
  return (
    <div className="navigation">
      <ControlledCarousel />
      {/* <div className="row row-col-6">
        sadsadas
      </div> */}
      <Servicios />
      <br id="Cursos" />
      <br />
      <br />

      <div class="cards col-lg-6 col-sm-12" id="quienesSomos">
        <QuienesSomos />
      </div>
    </div>
  );
};
export default Nav;
