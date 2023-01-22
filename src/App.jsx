import { Homepage, LoginPage } from "./pages";
import { Route, Routes } from "react-router-dom";
import { ErrorPage, SearchResults } from "./pages";
import HeaderFooter from "./components/layout/HeaderFooter";
import RegisterPage from "./pages/RegisterPage";
import { Auth } from "./middleware/Auth";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <HeaderFooter>
            <Homepage />
          </HeaderFooter>
        }
      />
      <Route
        path="/search-results/:query"
        element={
          <HeaderFooter>
            <SearchResults />
          </HeaderFooter>
        }
      />
      <Route
        path="/login"
        element={
          <Auth>
            <LoginPage />
          </Auth>
        }
      />
      <Route
        path="/register"
        element={
          <Auth>
            <RegisterPage />
          </Auth>
        }
      />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
