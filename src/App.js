import './App.css';
import Navbar from './components/navbar-component/Navbar.component';
import Image from './components/image-component/Image.component';
import Test from './components/test-component/test.component';
import OffcanvasMenu from './components/offcanvas-menu-component/OffcanvasMenu.component';

function App() {
  return (
    <div className="App">
      {/* <Test /> */}
      <Navbar />
      <Image />
      {/* <OffcanvasMenu/> */}
    </div>
  );
}

export default App;
