import "./Heading.css";
import { FaBeer } from "react-icons/fa";

const Heading = () => {
  return (
    <header className="header">
      <h2>CRUD App</h2>

      <div>
        <FaBeer />
      </div>
    </header>
  );
};

export default Heading;
