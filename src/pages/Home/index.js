import { useEffect, useState } from "react";
import { useAuth } from "../../context/UserAuthContext";
import { useNavigate } from "react-router";
import { Sidebar } from "../../components/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "../Dashboard";
import Settings from "../Settings";
import { Navigate } from "react-router-dom";

const Home = () => {
  const [authenticated, setauthenticated] = useState(null);
  useEffect(() => {
    const loggedInUser = localStorage.getItem("authenticated");
    if (loggedInUser) {
      setauthenticated(loggedInUser);
    }
  }, []);
  // if (!authenticated) {
  //   // Redirect
  //   return <Navigate replace to="/" />;
  // } else {
  return (
    <div class="flex ">
      <div className="hidden md:flex  h-[100vh] md:w-[200px]">
        {" "}
        <Sidebar />
      </div>
      <div class=" w-full h-[100vh]">
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </div>
    </div>
  );
  // }
};

export default Home;
