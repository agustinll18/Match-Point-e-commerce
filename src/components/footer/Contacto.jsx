import Github from "./Socials/Github";
const tel = "+54-11-2749-6547 ";
const Contacto = () => {
  return (
    <div className="contactoContainer col-12" id="contacto">
      <div className="col-6" style={{ zIndex: 2, paddingTop: "40px" }}>
        <h2>Contacto</h2>

        <h4>Const tel= {tel} </h4>
        <h4>Seguinos en Github</h4>
        <Github />
        {/* <div className="glass col-5">
          <form
            action="https://formsubmit.co/57a12b49d9713081d4ea2d232a6f7dba"
            method="POST"
          >
            <div class="mb-1">
              <label for="exampleFormControlInput1" class="form-label">
                <h4 className="email">Email :</h4>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1 email"
                  placeholder="name@example.com"
                  required
                  name="email"
                />
              </label>
            </div>
            <div class="mb-2">
              <label for="exampleFormControlTextarea1" class="form-label">
                <h4 className="mensaje">Message :</h4>
                <input
                  className="form-control message"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  required
                  placeholder="Message"
                  name="message"
                />
              </label>
            </div>
            <button className="subButton" type="submit">
              Submit
            </button>
          </form>
        </div> */}
        <div class="container">
          <form id="contact" action="https://formsubmit.co/57a12b49d9713081d4ea2d232a6f7dba" method="post">
            <h2> Formulario</h2>
            <h4>Envianos tu mensaje y responderemos lo antes posible!</h4>
            <fieldset>
              <input
                placeholder="Nombre"
                type="text"
                tabindex="1"
                required
                autofocus
              />
            </fieldset>
            <fieldset>
              <input
                placeholder="Email "
                type="email"
                tabindex="2"
                required
              />
            </fieldset>
            
            
            <fieldset>
              <textarea
                placeholder="Mensaje...."
                tabindex="5"
                required
              ></textarea>
            </fieldset>
            <fieldset>
              <button
                name="submit"
                type="submit"
                id="contact-submit"
                data-submit="...Sending"
              >
                Enviar
              </button>
            </fieldset>
          </form>
        </div>
        <h5>
          Created and designed by{" "}
          <a
            href="https://portfolio-agustinllados.000webhostapp.com/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Agustin LLados
          </a>
          <a
            href="https://www.linkedin.com/in/agustin-llados-a39067200/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            &nbsp; &nbsp; &nbsp; &nbsp;Linkedin
          </a>{" "}
        </h5>
      </div>
    </div>
  );
};
export default Contacto;
