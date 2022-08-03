import logo from "./images/bibliophile.svg";
import Dictionary from "./components/Dictionary";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header>
          <a href="/">
            <img src={logo} alt="dictioanary-logo" className="logo" />
            <h1>Dictionary App</h1>
          </a>
        </header>

        <main>
          <Dictionary keyword="sunrise" />
        </main>
      </div>
    </div>
  );
}

export default App;
