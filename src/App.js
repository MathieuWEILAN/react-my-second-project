import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Jobs from "./components/Jobs";

function App() {
  return (
    <div>
      <Header title="The Job Board" className="header" />
      <Jobs className="container" />
      <Footer
        name="Mathieu"
        framework="React"
        where="LeReacteur"
        className="footer"
      />
    </div>
  );
}

export default App;
