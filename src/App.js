import './App.css';
// import ParentComp from './component/class4/ParentComp';
// import ChildComp from './component/class4/ChildComp';
// import ConditionalRendering from './component/class4/ConditionalRendering';
// import PrevState from './component/class5/PrevState';
// import ListRender from './component/class5/ListRender';
// import ShowInfo from './component/class5/secondWay/ShowInfo';
// import Button from './component/class6/CssComponent/CssModules/Button';
// import CssStyleComp from './component/class6/CssComponent/CssStyleComp';
// import InlineCssComp from './component/class6/CssComponent/InlineCssComp';
// import ControlledFrom from './component/class7/Form/ControlledFrom';
// import UncontrolledFrom from './component/class7/Form/UncontrolledFrom';
// import MountingComp from './component/class8/Lifecycle/MountingComp';
// import UpdatingComp from './component/class8/Lifecycle/UpdatingComp';
// import UnmountingComp from './component/class8/Lifecycle/UnmountingComp';
// import FragmentComp from './component/class9/FragmentComp';
// import TableComp from './component/class9/TableComp';
// import MainComp from './component/class10/PureComp/MainComp';
// import InputRefsComp from './component/class11/Ref/InputRefsComp';
// import RefsComp from './component/class11/Ref/RefsComp';
// import ParentComp from './component/class11/ErrorBoundary/ParentComp';
// import Onclick from './component/class12/HOC/Onclick';
// import MouseOver from './component/class12/HOC/MouseOver';
// import ProductComp from './component/class13/ProductComp';
import ClickCounter from './component/class13/RenderProps/ClickCounter';
import Counting from './component/class13/RenderProps/Counting';
import HoverCounter from './component/class13/RenderProps/HoverCounter';
// import StudentComp from "./component/StudentComp";
// import MyClassComp from './component/MyClassComp';
// import Table from './component/task/Table'
// import Task from './component/Task';


function App() {
  return (
    <div className="App">
      {/* <StudentComp name = "Bayezid" age = "10" /> */}
      {/* <MyClassComp name = "Nazmul" age = {23} />
      <MyClassComp name = "Hasan" age = {18} /> */}
      {/* <MyClassComp />  */}
      {/* <ParentComp>
        <ChildComp />
      </ParentComp> */}
      {/* <ParentComp /> */}
      {/* <ConditionalRendering /> */}
      {/* <PrevState /> */}
      {/* <ListRender /> */}
      {/* <ShowInfo /> */}
      {/* <Table /> */}
      {/* <Task /> */}

      {/* <CssStyleComp />
      <InlineCssComp />
      <Button /> */}

      {/* <ControlledFrom /> */}
      {/* <UncontrolledFrom /> */}

      {/* <MountingComp /> */}
      {/* <UpdatingComp /> */}
      {/* <UnmountingComp /> */}

      {/* <FragmentComp /> */}
      {/* <TableComp /> */}

      {/* <MainComp /> */}

      {/* <InputRefsComp /> */}
      {/* <RefsComp /> */}
      {/* <ParentComp /> */}

      {/* <Onclick age="23" />
      <MouseOver color='Green' /> */}

      {/* <ProductComp name={(isAvailable) => isAvailable ? ("Laptop") : 'Not available'} /> */}
      <Counting render={(count, handler) => <ClickCounter count={count} handler={handler} />} />
      <Counting render={(stateValue, method) => <HoverCounter count={stateValue} handler={method} />} />


    </div>
  );
}

export default App;
