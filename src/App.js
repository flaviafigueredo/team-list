import './App.css';
import { TeamMemberCard } from './components/TeamMemberCard';
import { members } from './data/members';

function App() {  
  return (
    <div className="container">
      {members.map((member, index) => (
        <TeamMemberCard
          key={index}
          name={member.name}
          role={member.role}
          image={member.image}
        />
      ))}    
    </div>
  );
}

export default App;
