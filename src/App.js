import './App.css';
import { TeamMemberCard } from './components/TeamMemberCard';
import { members } from './data/members';
import { ThemeProvider } from './context/ThemeContext';
import { ThemeManager } from './components/ThemeManager';

function App() {  
  return (
    <ThemeProvider>
      <ThemeManager>
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
      </ThemeManager>
    </ThemeProvider>
  );
}

export default App;
