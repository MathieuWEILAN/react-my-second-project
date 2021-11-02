const Footer = (props) => {
  return (
    <div className={props.className}>
      <h2>
        Made with <span>{props.framework}</span> at <span> {props.where}</span>{" "}
        by <span>{props.name}</span>.
      </h2>
    </div>
  );
};

export default Footer;
