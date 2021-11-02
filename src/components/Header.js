import Title from "./Title";

const Header = (props) => {
  return (
    <div className={props.className}>
      <Title title={props.title} />;
    </div>
  );
};

export default Header;
