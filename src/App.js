import './index.css';
import Navbar from './components/Navbar';
import AboutSection from './components/AboutSection';
import MembersSection from './components/MembersSection';
import BannedPlayersSection from './components/BannedPlayersSection';
import ServerSection from './components/ServerSection';
import SocialMediaSection from './components/SocialMediaSection';

function App() {
  return (
    <div className="App">
      <Navbar />
      <AboutSection />
      <ServerSection />
      <MembersSection />
      <BannedPlayersSection />
      <SocialMediaSection />
    </div>
  );
}

export default App;
