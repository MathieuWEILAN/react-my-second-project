import Job from "./Job";

const Jobs = (props) => {
  return (
    <div className={props.className}>
      <Job
        className="redbox"
        title="Full Time Sales Associate - Sydney Boutique"
        contractType="CDI"
        country="Autralie"
        city="Sydney"
      />
      <Job
        className="greenbox"
        title="Agent de sécurité - Pantin"
        contractType="CDI"
        country="France"
        city="Pantin"
      />
      <Job
        className="yellowbox"
        title="Responsable d'atelier"
        contractType="CDD"
        country="France"
        city="Paris"
      />
      <Job
        className="bluebox"
        title="Chef de projets"
        contractType="CDD"
        country="France"
        city="Paris"
      />
      <Job
        className="pinkbox"
        title="Développeur React.js"
        contractType="CDI"
        country="France"
        city="Paris"
      />

      <Job
        className="redbox"
        title="Sales Associate Stockholm"
        contractType="CDI"
        country="Suède"
        city="Stockholm"
      />

      <Job
        className="greenbox"
        title="Vendeur - Crans Montana"
        contractType="CDI"
        country="Suisse"
        city="Crans Montana"
      />

      <Job
        className="yellowbox"
        title="CRM & Data Quality"
        contractType="CDI"
        country="USA"
        city="New York"
      />

      <Job
        className="bluebox"
        title="Infirmier H/F"
        contractType="CDI"
        country="France"
        city="Pantin"
      />
    </div>
  );
};

export default Jobs;
