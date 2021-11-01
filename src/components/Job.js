const Job = (props) => {
  return (
    <div className={props.className}>
      <h3>{props.title}</h3>
      <p>
        {props.contractType} - {props.country} - {props.city}
      </p>
    </div>
  );
};

export default Job;
