import './MembersSection.css';
import { clanAccount, admins, regularMembers, recruits } from '../data/membersData';

const MembersSection = () => {
  return (
    <div id="members" className="members">
      <h2>Conta do Clã</h2>
      <div className="member-item leader">{clanAccount}</div>

      <h2>Administradores</h2>
      <div className="member-list">
        {admins.map((admin) => (
          <div key={admin.id} className="member-item admin">
            {admin.name}
          </div>
        ))}
      </div>

      <h2>Membros</h2>
      <div className="member-list">
        {regularMembers.map((member) => (
          <div key={member.id} className="member-item">
            {member.name}
          </div>
        ))}
      </div>

      <h2>Recrutas</h2>
      <div className="member-list recruits">
        {recruits.map((recruit, index) => (
          <div key={index} className="member-item recruit">
            {recruit}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MembersSection;
