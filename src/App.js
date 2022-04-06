import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Checkout from './pages/Checkout';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Routes>
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/' element={<Home />} />
          <Route
            path='/test'
            element={
              <div>
                <h2>Test Page</h2>
                <p>hello!</p>
              </div>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

//Photo by <a href="https://unsplash.com/@kolamdigital?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Andy Hermawan</a> on <a href="https://unsplash.com/s/photos/online-store?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
