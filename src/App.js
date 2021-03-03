import AboutUs from "./pages/AboutUs";
import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
import { Switch, Route, useLocation } from "react-router-dom";
import MovieDetail from "./pages/MovieDetail";

import { AnimatePresence } from "framer-motion";
import ScrollTop from "./components/ScrollTop";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyle />
      <ScrollTop />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/contact" exact component={ContactUs}></Route>
          <Route path="/work" exact component={OurWork}></Route>
          <Route path="/work/:id">
            <MovieDetail />
          </Route>
          <Route path="/" exact component={AboutUs}></Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
