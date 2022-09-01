import { useState } from "react";
import UserList from "../components/UserList";

const initialUsers = [
  {
    id: 1,
    username: "Peter",
    email: "peter@gmail.com",
    active: false,
  },
  {
    id: 2,
    username: "Paul",
    email: "paul@gmail.com",
    active: true,
  },
  {
    id: 3,
    username: "Mary",
    email: "mary@gmail.com",
    active: false,
  },
];

export default function Signup() {
  const [users, setUsers] = useState(initialUsers);

  const onRemove = id => {
    setUsers(users => users.filter(user => user.id !== id));
  };

  const onToggle = id => {
    setUsers(users =>
      users.map(user =>
        user.id === id ? { ...user, active: !user.active } : user
      )
    );
  };

  return (
    <>
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
    </>
  );
}
