import "../src/style/Global.css"
import Landing from "./components/private/Landing/Landing";
import { Nav } from "./components/shared/Nav/Nav";
import Footer from "./components/shared/Footer/Footer";
import "./style/Global.css"
import "./style/Scroll.css"
function App() {
  return (
    <>
      <Nav/>
      <Landing/>
      <Footer/>
    </>
  );
}

export default App;
