import React from "react";
import "./App.css";
import Feed from "./Feed";
import Header from "./Header";
import Login from "./Login";
import Sidebar from "./Sidebar";
import Widgets from "./Widgets";

function App() {
  const user = null;

  return (
    <div className="App">
      {!user ? (
        <Login />
      ) : (
        <>
          {/* header here */}
          <Header />
          {/* App Body */}
          <div className="app_body">
            {/* sidebar */}
            <Sidebar />
            {/* feed */}
            <Feed />
            {/* right side bar  */}
            <Widgets />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
