const Footer = (props) => {
  return (
    <h2>
      Made with <span>{props.framework}</span> at <span> {props.where}</span> by{" "}
      <span>{props.name}</span>.
    </h2>
  );
};

export default Footer;
