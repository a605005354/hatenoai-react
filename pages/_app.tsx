// pages/_app.js
import 'bootstrap/dist/css/bootstrap.min.css'; // Add this line
// import '../styles/globals.css';
import { AuthProvider } from '../src/utils/authContext'; // Adjust the path as necessary

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  )
}

export default MyApp;