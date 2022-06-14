import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link, NavLink } from 'react-router-dom'
import BB8Icon from '../../assets/images/starwars_bb_icon_131817.png'

const Navigation = () => {
	return (
		<Navbar bg="dark" variant="dark" expand="md">
			<Container>
				<Navbar.Brand as={Link} to="/">
					<img
						alt="BB-8"
						src={BB8Icon}
						width="30"
						height="30"
						className="d-inline-block align-top"
						/>{' '}
						Star Wars Encyclopedia
				</Navbar.Brand>

				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ms-auto">
						<Nav.Link as={NavLink} to="/films">Films</Nav.Link>
						<Nav.Link as={NavLink} to="/people">People</Nav.Link>
						{/*
						<Nav.Link as={NavLink} to="/planets">Planets</Nav.Link>
						<Nav.Link as={NavLink} to="/spaceships">Spaceships</Nav.Link>
						<Nav.Link as={NavLink} to="/species">Species</Nav.Link>
						<Nav.Link as={NavLink} to="/vehicles">Vehicles</Nav.Link>
						*/}
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}

export default Navigation
