import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Jobs from "./components/Jobs";

function App() {
  return (
    <div>
      <div className="header">
        <Header title="The Job Board" />
      </div>

      <Jobs className="container" />

      <div className="footer">
        <Footer name="Mathieu" framework="React" where="LeReacteur" />
      </div>
    </div>
  );
}

export default App;
