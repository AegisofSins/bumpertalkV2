import Link from 'next/link';
import { slide as Menu } from 'react-burger-menu'

function HamburgerMenu() {

	
	return (
		<Menu right >
			<Link id="home" className="menu-item" href="/">Home</Link>
			<Link id="about" className="menu-item" href="/about">About</Link>
			<Link id="contact" className="menu-item" href="/contact">Contact</Link>
			<Link className="menu-item--small" href="">Settings</Link>
		</Menu>
	);
}

export default HamburgerMenu;
 