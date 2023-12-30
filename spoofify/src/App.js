import Login from './pages/login/Login'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Container from '@mui/material/Container'
import Dashboard from './pages/dashboard/Dashboard'

const code = new URLSearchParams(window.location.search).get('code')

function App() {
  console.log(code)
  return (
    <Container maxWidth={false} maxHeight="100vh" disableGutters sx={{ overflow: 'hidden' }}>
      <Navbar />
      {code ? <Dashboard code={code}/>: <Login />}
      <Footer />
    </Container>
  );
}

export default App;
