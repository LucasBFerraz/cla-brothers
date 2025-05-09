import './SocialMediaSection.css';

const SocialMediaSection = () => {
  return (
    <div id="social" className="social-media">
      <h2>Redes Sociais</h2>
      <div className="icons">
        <a href="#"><img src="/images/social-icons/discord.png" alt="Discord" /></a>
        <a href="#"><img src="/images/social-icons/facebook.png" alt="Facebook" /></a>
        <a href="#"><img src="/images/social-icons/twitter.png" alt="Twitter" /></a>
      </div>
    </div>
  );
};

export default SocialMediaSection;
