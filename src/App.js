import StatefulComponent from "./components/StatefulComponent";
import StatelessComponent from "./components/StatelessComponent";

function App() {
  return (
    <div className="wrapper">
      <StatelessComponent />
      <br />
      <p>====================================</p>
      <br />
      <StatefulComponent />
    </div>
  );
}

export default App;
