import React from "react";

const Hobbies = () => {
  return (
    <div className="hobbies">
      <h3>Intérêts</h3>
      <ul>
        <li className="hobby">
          <i className="fas fa-running"></i>
          <span>Course à pied</span>{" "}
        </li>
        <li className="hobby">
          <i className="fas fa-hiking"></i>
          <span>Randonnées</span>{" "}
        </li>
        <li className="hobby">
          <i className="fas fa-water"></i>
          <span>Natation</span>{" "}
        </li>
        <li className="hobby">
          <i className="fas fa-brain"></i>
          <span>I.A</span>{" "}
        </li>
        <li className="hobby">
          <i className="fas fa-rocket"></i>
          <span>Espace</span>{" "}
        </li>
      </ul>
    </div>
  );
};

export default Hobbies;
