import { Route, Routes } from "react-router-dom";
import PublicRoute from "./components/RouteGuards/PublicRoute";
import Login from "./pages/Auth/Login/Login";
import Register from "./pages/Auth/Register/Register";
import Products from "./pages/Shopping/Products";

function App() {
  return (
    <Routes>
      <Route
        path={Login.route}
        element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        }
      />
      <Route
        path={Register.route}
        element={
          <PublicRoute>
            <Register />
          </PublicRoute>
        }
      />
      <Route path="/" element={<Products />} />
    </Routes>
  );
}

export default App;
