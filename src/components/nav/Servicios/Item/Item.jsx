import { motion, Variants } from "framer-motion";
import { Link } from "react-router-dom";
const cardVariants: Variants = {
  offscreen: {
    y: 250,
  },
  onscreen: {
    y: 0,
    rotate: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 2,
    },
  },
};
export default function Item({ modelo, id,pic,precio }) {
  return (
    <>
      {{ modelo, id } ? (
        <motion.div
          className="card-container"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0 }}
        >
          <motion.div className="card" variants={cardVariants}>
            <div class="col">
              <div class="card h-10">
                <img src={pic} alt="raqueta" height="400"/>
                <div class="card-body">
                  <h5 class="card-title text-center">{modelo}</h5>
                  <h5 class="card-text">
                    ${precio}
                  </h5>
                </div>
                <Link to={`/productos/${id}`} className="card-footer">
                  COMPRAR 
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : (
        <h2>Cargando...</h2>
      )}
    </>
  );
}
