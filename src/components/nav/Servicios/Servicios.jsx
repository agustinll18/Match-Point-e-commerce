import React from "react";
import ItemListContainer from "./ItemListContainer/ItemListContainer";

export default function ContainerItemsGeneral() {
  return (
    <>
      <div className="row row-col-6 logos" style={{marginBottom: "50px"}}>
        <img
          src={require("../../../Australian_Open_Logo_2017.png")}
          alt=""
          height="125"
          width="125"
          style={{ width: "8%",borderRadius: "50%" }}
        />
        <img
          src={require("../../../roland-garros-logo.png")}
          alt=""
          height="125"
          width="125"
          style={{ width: "8%" }}
        />
        <img
          src={require("../../../wimbledon.png")}
          alt=""
          height="125"
          width="125"
          style={{ width: "8%" }}
        />
        <img
          src={require("../../../Us open.jpg")}
          alt=""
          height="125"
          width="125"
          style={{ width: "8%",borderRadius: "50%"  }}
        />
      </div>
      <div class="cards col-9" id="productos">
        <h2>Productos</h2>
        <ItemListContainer />
      </div>
    </>
  );
}
