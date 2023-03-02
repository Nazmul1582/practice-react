import ReusableComponent from "./components/ReusableComponent";

function App() {
  return (
    <div className="wrapper">
      <h1 className="title">Reusable Component</h1>
      <div className="center">
        <ReusableComponent name="Fahim" age={15} dist="Cumilla" />
        <br />
        <p>================================================</p>
        <br />
        <ReusableComponent name="Nafiz" age={14} dist="Dhaka" />
        <br />
        <p>================================================</p>
        <br />
        <ReusableComponent name="Sifat" age={13} dist="Khulna" />
      </div>
    </div>
  );
}

export default App;
