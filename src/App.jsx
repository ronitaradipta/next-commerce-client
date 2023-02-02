import { Homepage, LoginPage, ProductDetailPage } from "./pages";
import { Route, Routes } from "react-router-dom";
import { ErrorPage, SearchResults } from "./pages";
import HeaderFooter from "./components/layout/HeaderFooter";
import RegisterPage from "./pages/RegisterPage";
import { NonUserAuth, UserAuth } from "./middleware/Auth";
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
        path="/product-detail/:idData"
        element={
          <HeaderFooter>
            <ProductDetailPage />
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
          <NonUserAuth>
            <LoginPage />
          </NonUserAuth>
        }
      />
      <Route
        path="/register"
        element={
          <NonUserAuth>
            <RegisterPage />
          </NonUserAuth>
        }
      />
      <Route
        path="/store-dashboard"
        element={
          <UserAuth>
            <DashboardStore />
          </UserAuth>
        }
      />
      <Route
        path="/add-product"
        element={
          <UserAuth>
            <AddProduct />
          </UserAuth>
        }
      />
      <Route
        path="/list-products"
        element={
          <UserAuth>
            <ProductList />
          </UserAuth>
        }
      />
      <Route
        path="/store-transaction"
        element={
          <UserAuth>
            <DetailTransactions />
          </UserAuth>
        }
      />
      <Route
        path="/store-settings"
        element={
          <UserAuth>
            <StoreSetting />
          </UserAuth>
        }
      />
      <Route
        path="/profile"
        element={
          <UserAuth>
            <UserProfileSetting />
          </UserAuth>
        }
      />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
