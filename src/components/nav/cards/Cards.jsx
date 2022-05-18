import * as React from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";

export const Cards = (productos) => {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0.5, 1], [0.12, 1.5]);

  return (
    <div className="cardsShow">
      <div className="wrapper">
        <motion.div
          className="container"
          style={{
            scale,
          }}
        >
          <motion.div
            className="item"
            style={{
              scaleY: scrollYProgress,
            }}
          >
            <div id="cardService">
              <div class="cardImg">
                <img
                  classname="cardItem"
                  src={productos.pic}
                  variant="top"
                  alt="product pic"
                />
              </div>

              <div class="cardSection">
                <h3 className="productosModelo">{productos.modelo}</h3>
                <h4 className="porcentajeResponsive">
                  {" "}
                  {productos.porcentaje}%
                </h4>

                <ul className="herramientas">
                  <li>
                    <p className="liTools">{productos.herramienta1}</p>
                  </li>
                  <li>
                    <p className="liTools">{productos.herramienta2}</p>
                  </li>
                  <li>
                    <p className="liTools">{productos.herramienta3}</p>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};
{
  /* <div class="row row-cols-1 row-cols-md-2 g-4">
  <div class="col">
    <div class="card">
      <img src="..." class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">
          This is a longer card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="..." class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">
          This is a longer card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="..." class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">
          This is a longer card with supporting text below as a natural lead-in
          to additional content.
        </p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="..." class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">
          This is a longer card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </p>
      </div>
    </div>
  </div>
</div>; */
}
