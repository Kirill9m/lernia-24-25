function UserGreeting(props) {
  const welcomeMsg = (
    <h2 className="welcome-message">Welcome {props.username}</h2>
  );
  const loginPrmt = <h2 className="login-promt">Please log in</h2>;

  return props.isLoggedIn ? welcomeMsg : loginPrmt;
}

export default UserGreeting;
