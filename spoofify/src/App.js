import Login from './pages/login/Login'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Container from '@mui/material/Container'
import Dashboard from './pages/dashboard/Dashboard'
import AuthProvider from './context/AuthProvider'
import About from './pages/about/About'
import Privacy from './pages/privacy/Privacy'
import {
  Routes,
  Route
} from "react-router-dom";
const code = new URLSearchParams(window.location.search).get('code')

function App() {
  return (
    <AuthProvider>
      <Container maxWidth={false} maxHeight="100vh" disableGutters sx={{ overflow: 'hidden' }}>
        <Routes>
          <Route element={<Navbar />}>
            <Route path="/" element={<Dashboard code={code}/>}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/privacy" element={<Privacy />}/>
          </Route>
        </Routes>
        <Footer />
      </Container>
    </AuthProvider>
  );
}

export default App;
