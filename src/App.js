import * as React from "react";
import Login from "./Login";
import "./styles.css";

export default function App() {
  const [isLogin, setIsLogin] = React.useState(true);
  if (isLogin) {
    return <Login />;
  }
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
