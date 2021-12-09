import ReactHeader from "./profile/Profile.js";
import { Anes } from "./profile/Profile.js";
import PropTypes from "prop-types";

var person = {
  fullName: "Tom",
  bio: "Hanks",
  profession: "Hello!!",
};
person.PropTypes = {
  fullName: PropTypes.string,
  bio: PropTypes.string,
  profession: PropTypes.string,
};
const App = () => {
  return (
    <div
    style={{
      boxShadow: "5px 10px #888888",
      margin: "50px ",
      padding: "30px",
      display: "flex",
      flexDirection: "column",
      textAlign: "center",
      
      
    }}
    >
      <ReactHeader
        src="./a.jpg"
        person={person}
      />
      <Anes person={person} />
    </div>
  );
};
export default App;
