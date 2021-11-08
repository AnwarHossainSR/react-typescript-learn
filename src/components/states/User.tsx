import { useState } from "react";

type authUser = {
  name: string;
  email: string;
};
export const User = () => {
  const [user, setUser] = useState<authUser | null>(null);
  const handleLogin = () => {
    setUser({
      name: "Mahedi Hasan",
      email: "mahedianwar@Gmail.com",
    });
  };
  const handleLogout = () => {
    setUser(null);
  };
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User Name : {user?.name}</div>
      <div>User EMail : {user?.email}</div>
    </div>
  );
};
