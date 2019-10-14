import React from 'react';
import Menu from '../../componentes/Menu';
import './styles.css';

class Home extends React.Component {
    state = {
        seguidoresState: []
    }

    componentDidMount() {
        fetch(`https://api.github.com/users/${this.props.match.params.usuario}/followers`)
        .then(resposta => { return resposta.json() })
        .then(seguidores => this.setState({ seguidoresState: seguidores }));
    }

    render () {
        return (
            <>
                <Menu />
                <div className="containerHome">
                   { this.state.seguidoresState.map(seguidor => (
                       <div className="seguidorContainer">
                            <img src={seguidor.avatar_url}  alt={seguidor.login} />
                            <a className="link" href={seguidor.html_url}>{seguidor.login}</a>
                       </div>
                   )) } 
                </div>
            </>
        );
    }
}

export default Home;