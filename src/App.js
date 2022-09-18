import './App.css';
import HomePage from './pages/home';
import UserDetailPage from './pages/user-detail';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/:id' element={<UserDetailPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
