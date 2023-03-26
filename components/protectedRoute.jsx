import { useAuth } from "@/context/AuthContext";
import { useRouter }  from "next/navigation";
import { useEffect } from "react";

const ProtectedRoutes = ({children}) => {
	const auth  = useAuth();
	const user = auth.currentUser;
	const router = useRouter();

	useEffect(() => {
		if(!user){
			router.push('/login')
		}
	}, [router, user])
	
	return (<>{user ? children : null}</>)
	
};

export default ProtectedRoutes;