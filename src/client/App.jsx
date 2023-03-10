import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Background from './components/Background.jsx';
import Launches from './components/Launches.jsx';
import './style/App.scss';

const App = (props) => {
  return (
    <div className="router">
      <main>
        <div id="app-wrapper">
          <Background />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Launches />} />
              {/* <Route exact path="/login" component={LoginPage} /> */}
            </Routes>
          </BrowserRouter>
        </div>
      </main>
    </div>
  );
};

export default App;
