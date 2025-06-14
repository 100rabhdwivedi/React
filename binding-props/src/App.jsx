import { useState } from "react";
import UserList from "./components/userList";
import UserCreate from "./components/userCreate";
const App = () => {
  const [users, setUsers] = useState([
    { name: "saurabh", age: 18 },
    { name: "sivam", age: 15 },
    { name: "surya", age: 15 },
  ]);
  return (
    <div>
      <UserCreate users={users} setUsers={setUsers} />
      <UserList users={users} setUsers={setUsers} />
    </div>
  );
};

export default App;
