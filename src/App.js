import './App.css';
import CTA from './components/CTA';
import Copyright from './components/Copyright';
import FAQ from './components/FAQ';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Result from './components/Result';
import We from './components/We';
import Work from './components/Work';
import YourNeeds from './components/YourNeeds';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <HeroSection />
        <We />
        <Result />
        <Work />
        <YourNeeds />
        <FAQ />
        <CTA />
        {/* <Copyright /> */}
      </header>
    </div>
  );
}

export default App;
