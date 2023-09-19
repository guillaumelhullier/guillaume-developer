import React from "react";
import Navigation from "../components/Navigation";

const Home = () => {
  return (
    <div className="home">
      <Navigation />
      <div className="homeContent">
        <div className="content">
          <h1>Guillaume L'Hullier</h1>
          <h2>Développeur Font-end</h2>
          <div className="pdf">
            <a href="./media/CV.pdf" target="_blank">
              Télécharger CV
            </a>
          </div>
          <div className="pdf2">
            <a href="./media/diplome.pdf" target="_blank">
              Télécharger Diplôme
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
