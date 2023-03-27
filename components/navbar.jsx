import '../pages/_app'
import Link from 'next/link';
import { slide as Menu } from 'react-burger-menu'
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';


export default function Navbar(){
	const router = useRouter
	const { user, logout } =useAuth();
	const menuitems = [

		{
			title: "CME Credits",
			path: "",
			uniqueId: '1',
		},
		{
			title: "Snippet",
			path: "/",
			uniqueId: '2',
		},
		{
			title: "Courses",
			path: "/",
			uniqueId: '3',
		},
		{
			title: "Contact",
			path: "/",
			uniqueId: '4',
		},
	];


	return( 
		<header className="hidden flex justify-between items-center p-5 bg-gray-50">
			<div className="flex w-full lg:w-auto items-center">
        <Link href="/" className="logo">
					<span className="font-bold text-blue1">Beyond</span>
					<span className="text-red1">thebox</span>
        </Link>
      </div>
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
			</div>
			<div>
			<div className='lg:hidden'>
			<Menu right>
			<Link id="home" className="menu-item" href="/">Home</Link>
			<Link id="about" className="menu-item" href="#">About</Link>
			<Link id="contact" className="menu-item" href="#">Contact</Link>
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