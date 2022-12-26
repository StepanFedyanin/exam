import FooterContent from "../FooterContent/FooterContent";
import HeaderContent from "../HeaderContent/HeaderContent";
import MainContent from "../MainContent/MainContent";
import './App.scss'
function App() {
	return (
		<div className="app wrapper">
			<HeaderContent />
			<MainContent />
			<FooterContent />
		</div>
	);
}

export default App;
