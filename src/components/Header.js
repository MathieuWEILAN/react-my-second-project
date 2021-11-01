import Title from "./Title";

const Header = (props) => {
  return <Title className={props.header} title={props.title} />;
};

export default Header;
