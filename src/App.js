import { Navigate, Route, Routes } from "react-router-dom";
import "./App.scss";
import Layout from "./components/Layout/Layout";
import Login from "./components/Login/Login";
import SearchPage from "./pages/SearchPage.jsx/SearchPage";
import Private from "./routes/Private";
import Hidden from "./routes/Hidden";
import Home from "./pages/Home/Home";


const roles = {
  user: 1,
  admin: 2,
};



function App() {



  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public routes */}
        <Route path="unauthorized" element={<h2>Not authorized</h2>} />

        {/* private routes */}
        <Route element={<Private allowedRoles={[roles.user, roles.admin]} />}>
          <Route path="home" element={<Home />} />
          <Route path="search" element={<SearchPage />} />
        </Route>

        {/* <Route element={<Private allowedRoles={[roles.admin]} />}>
          <Route path="admin" element={<Admin />} />
        </Route> */}

        {/* hidden routes */}
        <Route element={<Hidden />}>
          <Route path="/" element={<Navigate to='login' />} />
          <Route path="login" element={<Login />} />
        </Route>

        <Route path="*" element={<h2>404</h2>} />
      </Route>
    </Routes>
  );
}

export default App;
