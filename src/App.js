import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Authorize from './pages/Authorize';

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Routes>
					<Route path='/' Component={Authorize}></Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
