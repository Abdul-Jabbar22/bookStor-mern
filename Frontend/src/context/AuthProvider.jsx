import React, { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  // Retrieve the user from localStorage and safely parse it
  const initialAuthUser = localStorage.getItem("Users");
  let parsedUser;

  try {
    // Try to parse the JSON if it exists
    parsedUser = initialAuthUser ? JSON.parse(initialAuthUser) : null;
  } catch (error) {
    console.error("Error parsing JSON from localStorage:", error);
    parsedUser = null; // Fallback to null in case of parsing errors
  }

  // Set up state using the parsed user data
  const [authUser, setAuthUser] = useState(parsedUser);

  return (
    <AuthContext.Provider value={[authUser, setAuthUser]}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook to use the AuthContext
export const useAuth = () => useContext(AuthContext);
