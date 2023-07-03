import "./App.css";
import { useAuth, useOnRedirectTo } from "@frontegg/react";
import { AdminPortal } from "@frontegg/react";

function App() {
  const { user, isAuthenticated, routes } = useAuth();
  const onRedirectTo = useOnRedirectTo();

  const logout = () => {
    onRedirectTo(routes.logoutUrl);
  };

  const login = () => {
    onRedirectTo(routes.loginUrl);
  };

  const handleClick = () => {
    AdminPortal.show();
  };

  return (
    <div className="App">
      {isAuthenticated ? (
        <div>
          <div>
            <img src={user?.profilePictureUrl} alt={user?.name} />
          </div>
          <div>
            <span>Logged in as: {user?.name}</span>
          </div>
          <div>
            <button onClick={() => alert(user.accessToken)}>
              What is my access token?
            </button>
          </div>
          <div>
            <button onClick={() => logout()}>Click to logout</button>
          </div>
          <div>
            <button onClick={handleClick}>Settings</button>
          </div>
        </div>
      ) : (
        <div>
          <button onClick={() => login()}>Click me to login</button>
        </div>
      )}
    </div>
  );
}

export default App;
