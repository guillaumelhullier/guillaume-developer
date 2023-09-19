import React, { Component } from "react";

export default class Project extends Component {
  state = {
    showInfo: false,
  };

  handleInfo = () => {
    this.setState({
      showInfo: !this.state.showInfo,
    });
  };

  render() {
    let { name, languagesIcon, source, info, picture } = this.props.item;

    return (
      <div className="project">
        <div className="icone">
          <div className="icons">
            {languagesIcon.map((icon) => (
              <i className={icon} key={icon}></i>
            ))}
          </div>
          <h2> {name} </h2>
          <img src={picture} alt="" onClick={this.handleInfo} />
          <div className="centre">
            <span className="infos" onClick={this.handleInfo}>
              <i className="fas fa-plus-circle fa-3x"></i>
            </span>
          </div>

          {this.state.showInfo && (
            <div className="showInfos">
              <div className="infosContent">
                <div className="head">
                  <h2>{name}</h2>
                  <div className="sourceCode">
                    <a
                      href={source}
                      rel="noopener noreferrer"
                      className="button"
                      target="_blank"
                    >
                      Code source
                    </a>
                  </div>
                </div>
                <p className="text">{info}</p>

                <div className="button return" onClick={this.handleInfo}>
                  Retourner sur la page
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}
