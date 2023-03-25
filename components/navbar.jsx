import '../pages/_app'
import Link from 'next/link';
import { slide as Menu } from 'react-burger-menu'

export default function Navbar(){

	const menuitems = [

		{
			title: "CME Credits",
			path: "/pricing",
		},
		{
			title: "Snippet",
			path: "/about",
		},
		{
			title: "Courses",
			path: "/blog",
		},
		{
			title: "Contact",
			path: "/contact",
		},
	];


	return( 
		<header className="flex flex-col lg:flex-row justify-between items-center p-5 bg-gray-50">
			<div className="hidden lg:flex w-full lg:w-auto items-center">
        <Link href="/" className="logo">
					<span className="font-bold text-blue1">Beyond</span>
					<span className="text-red1">thebox</span>
        </Link>
      </div>
			<div className="hidden w-full lg:w-auto mt-2 lg:flex lg:mt-0">
				<ul className="flex flex-col lg:flex-row lg:gap-3 font-semibold">
					{menuitems.map((item) => (
            <li key={item.id}>
							<Link
								href={item.path}
								className="flex lg:px-3 py-2 text-gray-600 hover:text-gray-900">
								{item.title}
							</Link>
						</li>
            ))
          }
      	</ul>
			</div>
			<div>
			<div className='lg:hidden'>
			<Menu>
			<Link id="home" className="menu-item" href="/">Home</Link>
			<Link id="about" className="menu-item" href="#">About</Link>
			<Link id="contact" className="menu-item" href="#">Contact</Link>
			<Link className="menu-item--small" href="/signup">Log In/Sign Up</Link>
			</Menu>
			</div>
      <div className="hidden lg:flex items-center gap-4">
        <Link href="/login" className="navbarLogin-signup navbar-login">Log in</Link>
        <Link href="/signup" className="navbarLogin-signup navbar-signup">Sign up</Link>
      </div>
    </div>
		</header>

	)
}