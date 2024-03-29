import '../pages/_app'
import Link from 'next/link';
import { slide as Menu } from 'react-burger-menu'
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';



export default function Navbar(){
	const router = useRouter()
	const { user, logout } =useAuth();
	const [isMenuOpen, handleMenu] = useState(false);

	useEffect(()  => {
		const body = document.body;
		body.addEventListener('click', () => handleCloseMenu())
		window.addEventListener('scroll', () => handleCloseMenu())
	});

	const handleCloseMenu = () => {
		handleMenu(false);
	};

	const handleStateChange = (state) => {
		handleMenu(state.isOpen);
	};


	const menuitems = [

		{
			title: "CME Credits",
			path: "/credits",
			uniqueId: '1',
		},
		{
			title: "Snippet",
			path: "/snippets",
			uniqueId: '2',
		},
		{
			title: "Courses",
			path: "/courses",
			uniqueId: '3',
		},
		{
			title: "Contact",
			path: "/contact",
			uniqueId: '4',
		},
	];
	return(
		<header className="flex justify-between items-center p-5 bg-gray-50">
			<div className="flex w-full lg:w-auto items-center">
        <Link href="/homepage" className="logo">
					<span className="font-bold text-blue1">Bumper</span>
					<span className="text-red1">Talk</span>
        </Link>
      </div>
			{user ? (
			<div className="hidden lg:flex">
			<ul className="flex lg:gap-3 font-semibold">
        { menuitems.map((item) => (
          <li key={item.uniqueId}>
            <Link
							href={item.path}
							className="flex lg:px-3 py-2 text-gray-600 hover:text-blue1">
							{item.title}
						</Link>
					</li>
				))
				}
			</ul>
			</div> ) : <div className="hidden "></div> }
			<div>
			<div className='lg:hidden'>
			<Menu right isOpen={isMenuOpen} onStateChange={handleStateChange}>
				{
					menuitems.map((item) => (
						<Link key={item.uniqueId}
						id={item.title}
						className="menu-item" 
						href={item.path} 
						onClick={() => handleCloseMenu()}>{item.title}</Link>
					))
				}
			{user  ? (
				<Link className="menu-item--small" href="/login" onClick={() => {logout()}}>Logout</Link>	
				) : <Link className="menu-item--small" href="/signup">Log In/Sign Up</Link> 
			}
			</Menu>
			</div>
      <div className="hidden lg:flex items-center gap-4">
				{user ? (
					<Link className="logout" href=''  
					onClick={() => {
						logout();
						router.push('/login')
					}}>Logout</Link>	
				) :
					<> 
					<Link href="/login" className="navbarLogin-signup navbar-login">Log in</Link>
					<Link href="/signup" className="navbarLogin-signup navbar-signup">Sign up</Link>
				</>
				}
      </div>
    </div>
		</header>
	)
}