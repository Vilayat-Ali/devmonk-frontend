import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { CookiesProvider } from "react-cookie"

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
