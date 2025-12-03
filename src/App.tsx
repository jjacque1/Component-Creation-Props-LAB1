import "./App.css";
import { UserProfileCard } from "./components/UserProfileCard/UserProfileCard";

const user = {
  id: "1",
  name: "John Doe",
  email: "john.doe@example.com",
  role: "Software Engineer",
};

function App() {
  return (
    <div>
      <UserProfileCard
        user={user}
        showEmail={true}
        showRole={true}
        onEdit={(name) => alert(`Edit user ${name}`)}
      >
        
      </UserProfileCard>
    </div>
  );
}

export default App;
