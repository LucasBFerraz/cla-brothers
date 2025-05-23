import './App.css';
import Header from './components/header/header'
import LandingPage from './components/landing-page/landing-page';
import Members from './components/members/members';
import Footer from './components/footer/footer'
import Maps from './components/maps/maps'

function App() {
  return (
    <div className="app-container">
      <Header />
      <main>
        <div id="server">
          <LandingPage />
        </div>
        <div id="maps">
          <Maps />
        </div>
        <div id="members">
          <Members />
        </div>
      </main>
      <div id="footer">
      <Footer />
      </div>
    </div>
  );
}

export default App;
