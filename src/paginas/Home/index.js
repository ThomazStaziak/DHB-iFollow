import React from "react";
import Menu from "../../componentes/Menu";
import "./styles.css";

class Home extends React.Component {
  state = {
    seguidoresState: []
  };

  componentDidMount() {
    fetch(
      `https://api.github.com/users/${this.props.match.params.usuario}/followers`
    )
      .then(resposta => {
        return resposta.json();
      })
      .then(seguidores => {
        console.log(seguidores);
        this.setState({ seguidoresState: seguidores });
      });
  }

  render() {
    return (
      <>
        <Menu />
        <div className="containerHome">
          {this.state.seguidoresState.map(seguidor => (
            <a
              key={String(seguidor.id)}
              className="seguidorContainer"
              href={seguidor.html_url}
            >
              <img src={seguidor.avatar_url} alt={seguidor.login} />
              <p className="link">{seguidor.login}</p>
            </a>
          ))}
        </div>
      </>
    );
  }
}

export default Home;
