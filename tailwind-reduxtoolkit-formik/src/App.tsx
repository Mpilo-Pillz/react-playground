import { Route, Routes } from "react-router-dom";
import PublicRoute from "./components/RouteGuards/PublicRoute";
import Products from "./pages/Shopping/Products/Products";
import ProtectedRoute from "./components/RouteGuards/ProtectedRoute";
import Cart from "./pages/Shopping/Cart/Cart";
import { QueryClient, QueryClientProvider } from "react-query";
import Header from "./components/Header";
import Login from "./pages/Auth/Login/Login";
import Register from "./pages/Auth/Register/Register";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Header />
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
        <Route
          path={Cart.route}
          element={
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          }
        />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
