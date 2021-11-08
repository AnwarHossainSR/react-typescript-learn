import { useState } from "react";

type authUser = {
  name: string;
  email: string;
};
export const User = () => {
  const [user, setUser] = useState<authUser>({} as authUser);
  const handleLogin = () => {
    setUser({
      name: "Mahedi Hasan",
      email: "mahedianwar@Gmail.com",
    });
  };
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <div>User Name : {user.name}</div>
      <div>User EMail : {user.email}</div>
    </div>
  );
};
