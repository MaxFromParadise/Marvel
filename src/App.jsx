import './App.css';
import { Header } from './components/header/header.component';
import { RandomInfo } from './components/random-info/random-info.component';

function App() {
	return (
		<>
			<div className='container'>
				<Header />
				<RandomInfo />
			</div>
			<div className='bg-asset'>
				<img src='public/bgAsset.png' alt='bg asset' />
			</div>
		</>
	);
}

export default App;
