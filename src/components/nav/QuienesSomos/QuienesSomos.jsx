import React, { useRef } from "react";
import { motion } from "framer-motion";

const QuienesSomos = () => {
  const constraintsRef = useRef(null);
  return (
    <div className="quienesSomos"/*  id="quienesSomos" */>
      <motion.div className="pesasBR" ref={constraintsRef}>
        <motion.div className="item" drag="y" dragConstraints={constraintsRef}>
          <div className="barra"></div>
          <div className="discos"></div>
          <div className="discos"></div>
          <div className="discos"></div>
          <div className="discos"></div>
          <div className="discos"></div>
          <div className="discos"></div>
        </motion.div>
      </motion.div>

      <h2>Quienes Somos</h2>
      <h4 style={{fontWeight:700}}>Hola! soy Agustín LLadós y soy un Front End Developer</h4>
      <p>Tengo 20 años, nacido en 2002, y soy desarrolador Full-stack mejorando mi conocimiento en el area del Back-end. Me gusta programar en el area del Front-end, usar librerias y hacer frente a los desafios que se presenten. Mis hobbis son : hacer deporte, especialmente me gusta el Tenis y el futbol, salir con amigos y comer con mi familia en los domingos </p>
    </div>
  );
};
export default QuienesSomos;