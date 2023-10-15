import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import Hi from './hi';
import Login from './components/loggin';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/" element={<Login/>}/>
            <Route path="/Hi" element={<Hi/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
