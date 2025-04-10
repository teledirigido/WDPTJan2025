import { createContext, useContext, useState } from "react";

/**
 * 1. Create the Context using "createContext"
 * 2. Create the provider 
 * 2.1 Create the logic inside the provider
 * 2.2 Return the component with the {children}
 * 3. Create the hook
 */

// 1.
const userContext = createContext();

// 2.
export const UserProvider = ({ children }) => {
  // 2.1 The logic
  const [user, setUser] = useState({
    name: "Alice",
    avatar: "👩‍🌾"
  });

  const userLogout = () => {
    setUser({});
  }

  const userLogin = () => {
    setUser({
      name: "Admin",
      avatar: "🤖"
    });
  }

  // 2.2 The Return
  return (
    <userContext.Provider value={{ user, userLogout, userLogin }}>
      {children}
    </userContext.Provider>
  )

}

// 3. Create the hook
export const useUser = () => useContext(userContext);