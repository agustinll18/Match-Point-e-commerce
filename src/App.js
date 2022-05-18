import "./App.css";
import Header from "./components/header/Header";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ItemDetailContainer from "./components/nav/Servicios/ItemDetailContainer/ItemDetailContainer";/* 
import ScrollToTop from "./FixScroll"; */

function App() {
  return (
    <div className="App">
      <Router>{/* 
        <ScrollToTop> */}
          <Switch>
            <Route exact path="/">
              <Header />
              <Nav />
              <Footer />
            </Route>
            <Route path="/productos/:id">
              <ItemDetailContainer />
            </Route>{/* 
            <Route path="/404">
              <NoMatch />
            </Route> */}
          </Switch>{/* 
        </ScrollToTop> */}
      </Router>
    </div>
  );
}

export default App;

