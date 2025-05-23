import './members.css';
import { clanAccount, admins, regularMembers, recruits } from '../../data/membersData';

const Members = () => {
  return (
    <div>
      <div className="members-ticker">
          <h1>MEMBROS</h1>
      </div>
      <div className="member-list">
        <h2>Conta do Clã</h2>
        <div className="member-item">{clanAccount}</div>
      </div>

      <div className="member-list">
        <h2>Administradores</h2>
        {admins.map((admin) => (
          <div className="member-item">
            {admin.name}
          </div>
        ))}
      </div>

      <div className="member-list">
        <h2>Membros</h2>
        {regularMembers.map((member) => (
          <div className="member-item">
            {member.name}
          </div>
        ))}
      </div>

      <div className="member-list">
        <h2>Recrutas</h2>
        {recruits.map((recruit, index) => (
          <div className="member-item">
            {recruit}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Members;