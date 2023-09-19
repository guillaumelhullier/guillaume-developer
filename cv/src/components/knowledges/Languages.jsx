import React, { Component } from "react";
import ProgressBar from "./ProgressBar";

export default class Languages extends Component {
  state = {
    languages: [
      { id: 1, value: "Javascript", xp: 1.8 },
      { id: 2, value: "Css", xp: 2 },
      /* { id: 3, value: "Php", xp: 0.7 },*/
      { id: 3, value: "HTML", xp: 2 },
      /* { id: 4, value: "Python", xp: 0.4 },*/
    ],
    frameworks: [
      { id: 1, value: "React", xp: 1.4 },
      /* { id: 2, value: "Bootstrap", xp: 2 },*/
      { id: 3, value: "Sass", xp: 1.5 },
      { id: 4, value: "Material UI", xp: 0.5 },
    ],
  };

  render() {
    let { languages, frameworks } = this.state;

    return (
      <div className="languagesFrameworks">
        <ProgressBar
          languages={languages}
          className="languageDisplay"
          title="languages"
        />
        <ProgressBar
          languages={frameworks}
          title="frameworks & bibliothèques"
          className="frameworksDisplay"
        />
      </div>
    );
  }
}

/*import React from "react";

const Languages = () => {
  return <div>Languages et Frameworks</div>;
};

export default Languages;*/
