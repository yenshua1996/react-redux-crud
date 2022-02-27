import "./App.css";
import Todos from "./components/Todos";
import Form from "./components/Form";
import Heading from "./components/Heading";

function App() {
  return (
    <div className="container">
      <Heading />
      <Form />
      <Todos />
    </div>
  );
}

export default App;
