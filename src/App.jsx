import { Homepage, LoginPage } from "./pages";
import { Route, Routes } from "react-router-dom";
import { ErrorPage, SearchResults } from "./pages";
import HeaderFooter from "./components/layout/HeaderFooter";
import RegisterPage from "./pages/RegisterPage";
import { Auth } from "./middleware/Auth";
import DashboardStore from "./pages/DashboardStore";
import StoreSetting from "./pages/StoreSetting";
import DetailTransactions from "./pages/DetailTransactions";
import ProductList from "./pages/ProductList";
import AddProduct from "./pages/AddProduct";
import UserProfileSetting from "./pages/UserProfileSetting";

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
      <Route path="/store-dashboard" element={<DashboardStore />} />
      <Route path="/add-product" element={<AddProduct />} />
      <Route path="/list-products" element={<ProductList />} />
      <Route path="/store-transaction" element={<DetailTransactions />} />
      <Route path="/store-settings" element={<StoreSetting />} />
      <Route path="/profile" element={<UserProfileSetting />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
