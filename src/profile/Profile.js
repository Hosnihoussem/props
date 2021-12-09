import Button from "react-bootstrap/Button";
function ReactHeader(props) {
  return (
    <div>
      <div>
        {props.person.fullName}
        {props.person.bio}
        {props.person.profession}
      </div>
      <img src={props.src} alt="img" />
      {props.children}
    </div>
  );
}

const Anes = (props) => {
  const alertt = () =>
    alert(`${props.person.fullName} ALERT  MESSAGE YOUR EMAIL IS ALREDY EXIST`);
  return (
    <div>
      <p>defaultProps : {props.person.fullName}</p>
      <Button variant="primary" size="lg" active onClick={alertt}>
        Click The Alert Message
      </Button>{" "}
    </div>
  );
};
Anes.defaultProps = {
  person: {
    fullName: "choufen",
    bio: "taka",
    profession: "banai!!",
  },
};

export { Anes };
export default ReactHeader;