import ClassComponent from "./components/ClassComponent";
import FunctionalComponent from "./components/FunctionalComponent";

function App() {
  return (
    <div className="wrapper">
      <ClassComponent profession="student" />
      <br />
      <p>============================================================</p>
      <br />
      <FunctionalComponent myself={{ name: "Nazmul", profession: "student" }} />
    </div>
  );
}

export default App;
