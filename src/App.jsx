import { useEffect } from "react";
import Chat from "./components/chat/Chat";
import Detail from "./components/detail/Detail";
import List from "./components/list/List";
import Login from "./components/login/Login";
import Notification from "./components/notification/Notification";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./lib/firebase";
import { useUserStore } from "./lib/userStore";
import { useChatStore } from "./lib/chatStore";

// Main App component
const App = () => {
  // Extract state and actions from the user store
  const { currentUser, isLoading, fetchUserInfo } = useUserStore();
  
  // Extract chat ID from the chat store (assuming useChatStore is defined elsewhere)
  const { chatId } = useChatStore();

  // Effect to listen for authentication state changes
  useEffect(() => {
    // Subscribe to authentication state changes
    const unSub = onAuthStateChanged(auth, (user) => {
      // Fetch user information when the authentication state changes
      fetchUserInfo(user?.uid);
    });

    // Clean up the subscription on component unmount
    return () => {
      unSub();
    };
  }, [fetchUserInfo]); // Dependency array ensures this effect runs when fetchUserInfo changes

  // If the app is still loading user data, show a loading indicator
  if (isLoading) return <div className="loading">Loading...</div>;

  // Render the main application interface
  return (
    <div className="container">
      {currentUser ? (
        <>
          {/* Show the List component */}
          <List />
          
          {/* Show the Chat and Detail components only if a chat ID is selected */}
          {chatId && <Chat />}
          {chatId && <Detail />}
        </>
      ) : (
        // If no user is logged in, show the Login component
        <Login />
      )}
      
      {/*shows the Notification component */}
      <Notification />
    </div>
  );
};

// Exported the App component as the default export
export default App;
