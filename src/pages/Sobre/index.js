import {Link} from 'react-router-dom'

function Sobre(){

	return (
		<div>
			<h1>Bem vindo a pagina SOBRE</h1>
			<br/>
			<Link to="/">Pagina Home</Link> <br />
			<Link to="/contato">Contato</Link>
		</div>	
	)
	
}

export default Sobre;