import Navbar from "../components/navbar";
import '../styles/globals.css'
import { AuthContextProvider } from "@/context/AuthContext";
import ProtectedRoute from "@/components/protectedRoute";
import { useRouter } from "next/router";

const noAuthRequired = ['/login', '/signup', '/forgetpass']

function MyApp({ Component, pageProps }) {

  const router = useRouter();
    return (
      <AuthContextProvider>
        <Navbar />
        {noAuthRequired.includes(router.pathname) ? (
          <Component {...pageProps} />
        ) : (
          <ProtectedRoute>
            <Component {...pageProps} />
          </ProtectedRoute>
        )}
      </AuthContextProvider>
    )
  }

export default MyApp;