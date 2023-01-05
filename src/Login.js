import * as React from "react";
import worker from "../__test__/mocks";
console.log(worker);
const Login = () => {
  return (
    <div>
      <form>
        <label htmlFor="name">Name:</label>
        <input id="name" type="text" placeholder="name" />
      </form>
    </div>
  );
};

export default Login;
