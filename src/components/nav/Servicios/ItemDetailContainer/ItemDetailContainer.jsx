import React, { useState } from "react";
import { useParams } from "react-router";
import Footer from "../../../footer/Footer";
import Header from "../../../header/Header";
export default function ItemDetailContainer() {/* 
  const [clicks, setClicks] = useState(0); */

  const [items, setItems] = useState();
  const { id } = useParams();
  var productos = [
    {
      modelo: "Babolat Pure Aero Rafa",
      descripcion: "Combatividad, resistencia, fortaleza mental... ¡eres como Rafa! Es hora de desafiar a tus oponentes más duros con esta Pure Aero, que con su nombre y colores acompañará tu dominio del juego a través de tu liftado y tu potencia.",
      stock: 75,
      precio:59000,
      id: 1,
      pic: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/338/510/products/raqueta-babolat-pure-aero-rafa-2-bff1f4ef7c1210fb3b16334515103466-240-0.png",
      peso:'300 g',
      aro:"100 in²",
      patronEncordado:"16/19",
      grip:"4 3/4 4 1/4",
      balance:"320 mm",
      largo:"685 mm"
    },
    {
      modelo: "Babolat Pure Drive ",
      descripcion: "Babolat lanzó la Pure Drive en 1994 y rápidamente se estableció como una de las raquetas más populares y versátiles del mundo.",
      stock: 30,
      precio:52000,
      id: 2,
      pic: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/338/510/products/pure-drive-encordada-21-358f17888d656be79c16341391022033-240-0.png",
      peso:'300 g',
      aro:"100 in²",
      patronEncordado:"16/19",
      grip:"4 3/4 4 1/4",
      balance:"320 mm",
      largo:"685 mm"
    },
    {
      modelo: "Babolat Pure Strike 100 ",
      descripcion: " Con la 3ª generación de la Pure Strike, Babolat da un paso hacia adelante en el control del juego moderno. ¿Sueñas con esa sensación clásica? El riguroso control de la Pure Strike ha sido diseñado para satisfacer tus exigencias como jugador agresivo que le pega duro a la bola. ",
      stock: 40,
      precio:51000,
      id: 3,
      pic: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/338/510/products/babolat-pure_strike_100-11-7434b6518bd529d73016357184390406-480-0.png",
      peso:'295 g',
      aro:"100 in²",
      patronEncordado:"16/19",
      grip:"4 3/4 4 1/4",
      balance:"320 mm",
      largo:"685 mm"
    },
    {
      modelo: "HEAD Speed PRO ",
      descripcion: "Diseñada para la velocidad y para un swing rápido, ahora, la SPEED PRO promete un tacto sensacional aún mayor gracias a la  nueva estructura en material Auxetic. Esta raqueta, forma parte de la serie SPEED,diseñada para jugadores de torneos de nivel avanzado que buscan un control óptimo en sus juegos rápidos. ",
      stock: 40,
      precio:54000,
      id: 4,
      pic: "https://cdn-mdb.head.com/CDN3/G/233602/1/400x400/speed-pro-2022.jpg",
      peso:'310 g',
      aro:" 100 in²",
      patronEncordado:"18/20",
      grip:"4 1/4",
      balance:"315mm",
      largo:"685mm"
    },
    {
      modelo: "HEAD Prestige PRO",
      descripcion: "La raqueta de tenis PRESTIGE PRO da un giro innovador a todo un clásico de HEAD, incorporando a partir de ahora el tacto sensacional gracias a la nueva estructura Auxetic para ayudar a los jugadores de nivel avanzado a ser más precisos y tener más control. ",
      stock: 40,
      precio:51500,
      id: 5,
      pic: "https://cdn-mdb.head.com/CDN3/G/236101/1/400x400/prestige-pro-2021.jpg",
      peso:'320 g',
      aro:" 98 in²",
      patronEncordado:"18/20",
      grip:"4 3/4",
      balance:"310mm",
      largo:"685mm"
    },
    {
      modelo: "HEAD Radical PRO",
      descripcion: "Con un nuevo diseño dinámico y atrevido que refleja su estilo moderno, la RADICAL PRO pone en ten manos la combinación perfecta de potencia, control y efecto para el jugador de nivel avanzado y versátil que se enfrenta a todas las superficies. ",
      stock: 40,
      precio:53000,
      id: 6,
      pic: "https://cdn-mdb.head.com/CDN3/G/234101/1/400x400/radical-pro.jpg",
      peso:'315 g',
      aro:"98 in²",
      patronEncordado:"16/19",
      grip:"4 3/4",
      balance:"315 mm",
      largo:"685 mm"
    },
    {
      modelo: "Wilson CLASH 98 V2",
      descripcion: "Equipada con el cabezal más pequeño de la línea Clash v2 para una precisión de primera, la Clash 98 v2 combina un diseño puntero con un rendimiento supremo para los jugadores más avanzados. Una construcción de carbono patentada, se une a una composición revisada en la punta del aro para crear una excelente flexibilidad.",
      stock: 40,
      precio:58000,
      id: 7,
      pic: "https://wilsonstore.com.ar/media/catalog/product/cache/70463b1ff005ad550922e9aee1aaa0df/w/r/wr074510u_1_clash_108_v2_rd_bl-1200x1200_2_1.jpeg",
      peso:'310 g',
      aro:"98 in²",
      patronEncordado:"16/19",
      grip:"4 3/4",
      balance:"",
      largo:"685 mm"
    },
    {
      modelo: "Wilson Pro Staff 97ULS",
      descripcion: "Altamente maniobrable y súper fácil de balancear para las estrellas del mañana, la raqueta Pro Staff 97ULS presenta la tecnología Spin Effect para spin de precisión.",
      stock: 40,
      precio:57000,
      id: 8,
      pic: "https://wilsonstore.com.ar/media/catalog/product/cache/70463b1ff005ad550922e9aee1aaa0df/w/r/wrt73181u_5.jpg",
      peso:'270 g',
      aro:"97 in²",
      patronEncordado:"18/16",
      grip:"4 3/4",
      balance:"325 mm",
      largo:"685 mm"
    },
    {
      modelo: "Wilson Blade 104 V8.0",
      descripcion: "La Blade 104 v8 también podría considerarse la raqueta del renacimiento: presenta una mezcla verdaderamente envidiosa de sensación, potencia, perdón, flexibilidad, estabilidad y un diseño impresionante. Con un acabado elástico dinámico que cambia de color que se transforma entre tonos de verde y cobre.",
      stock: 40,
      precio:50500,
      id: 9,
      pic: "https://wilsonstore.com.ar/media/catalog/product/cache/70463b1ff005ad550922e9aee1aaa0df/w/r/wr079111u_1_blade_104_v8_iridescent-1200x1200_2.jpeg",
      peso:'290 g',
      aro:"104 in²",
      patronEncordado:"18/20",
      grip:"4 3/4",
      balance:"",
      largo:"698 mm"
    },
  ];
  /* PARA COMPRAS MULTIPLES DEL MISMO PRODUCTO */
  
/*   const stock = productos[id - 1].stock;
  const addClick = () => {
    if (clicks < stock) setClicks(clicks + 1);
  };
  const removeClick = () => {
    if (clicks > 0) setClicks(clicks - 1);
  }; */
  const getItem = new Promise((resolve, reject) => {
    setTimeout(() => resolve(productos), 1000);
  });
  getItem.then((resolve) => setItems(resolve[id - 1]));
  return (
    <>
      <Header></Header>
      {productos[id - 1] ? (
        <>
          <div
            class="wrapperCard col-6"
            style={{ transform: " translateY(120px)", marginBottom: "120px" }}
          >
            <div class="product-img">
              <img src={productos[id - 1].pic}  alt={productos[id - 1].modelo}/>
            </div>
            <div class="product-info">
              <div class="product-text">
                <h1 class="product-title">{productos[id - 1].modelo}</h1>
                <h2 class="product-sub-title">{productos[id - 1].marca}</h2>
                <p>{productos[id - 1].descripcion}</p>
              </div>
              <div class="product-price-btn">
                <p>
                  $ &nbsp;<span>{productos[id - 1].precio}</span>
                </p>
                <button type="button">
                  {" "}
                  <a
                    href="http://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    COMPRAR
                  </a>
                </button>
              </div>
            </div>
          </div>
          <div className="col-6" style={{marginTop: "220px"}}>
            <table class="table table-striped table-hover table-dark">
              <h3 style={{ color: "black", fontWeight:500 }}>Detalles</h3>
              <tbody>
                <tr>
                  <th scope="row">Peso</th>
                  <td colspan="2" class="table-active">
                    {productos[id - 1].peso}
                  </td>
                </tr>
                <tr>
                  <th scope="row">Aro</th>
                  <td colspan="2" class="table-active">
                    {productos[id - 1].aro}
                  </td>
                </tr>
                <tr>
                  <th scope="row">Patron de encordado</th>
                  <td colspan="2" class="table-active">
                    {productos[id - 1].patronEncordado}
                  </td>
                </tr>
                <tr>
                  <th scope="row">Grip</th>
                  <td colspan="2" class="table-active">
                    {productos[id - 1].grip}
                  </td>
                </tr>
                <tr>
                  <th scope="row">Balance</th>
                  <td colspan="2" class="table-active">
                    {productos[id - 1].balance}
                  </td>
                </tr>
                <tr>
                  <th scope="row">Largo</th>
                  <td colspan="2" class="table-active">
                    {productos[id - 1].largo}
                  </td>
                </tr>
                
              </tbody>
            </table>
          </div>
          <Footer/>
        </>
      ) : (
        <h2>Cargando....</h2>
      )}
    </>
  );
}
