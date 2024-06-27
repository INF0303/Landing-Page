import './App.css';
import FAQ from './components/FAQ';
import HeroSection from './components/HeroSection';
import Result from './components/Result';
import We from './components/We';
import Work from './components/Work';
import YourNeeds from './components/YourNeeds';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HeroSection />
        <We />
        <Result />
        <Work />
        <YourNeeds />
        <FAQ />
      </header>
    </div>
  );
}

export default App;
