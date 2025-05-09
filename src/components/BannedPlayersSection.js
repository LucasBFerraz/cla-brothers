import './BannedPlayersSection.css';
import { bannedPlayers } from '../data/bannedPlayersData';

const BannedPlayersSection = () => {
  return (
    <div id="banned" className="banned-players">
      <h2>🔒 Jogadores Banidos</h2>
      <div className="banned-list">
        {bannedPlayers.map((player, index) => (
          <div key={index} className="banned-item">
            <div className="player-name">{player.user}</div>
            <div className="reason">Motivo: {player.reason}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BannedPlayersSection;
