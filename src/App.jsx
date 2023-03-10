import Homepage from "./pages/Homepage";
import LoginPage from "./pages/LoginPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import { Route, Routes } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import SearchResults from "./pages/SearchResults";
import HeaderFooter from "./components/layout/HeaderFooter";
import RegisterPage from "./pages/RegisterPage";
import { NonUserAuth, UserAuth } from "./middleware/Auth";
import DashboardStore from "./pages/DashboardStore";
import StoreSetting from "./pages/StoreSetting";
import DetailTransactions from "./pages/DetailTransactions";
import ProductList from "./pages/ProductList";
import AddProduct from "./pages/AddProduct";
import UserProfileSetting from "./pages/UserProfileSetting";
import CheckoutPage from "./pages/CheckoutPage";
import TransactionSuccess from "./pages/TransactionSuccess";
import StorePage from "./pages/StorePage";
import StoreRegisterPage from "./pages/StoreRegisterPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";

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
        path="/checkout/:idData"
        element={
          <UserAuth>
            <HeaderFooter>
              <CheckoutPage />
            </HeaderFooter>
          </UserAuth>
        }
      />
      <Route
        path="/transaction-success"
        element={
          <UserAuth>
            <TransactionSuccess />
          </UserAuth>
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
        path="/category/:cat"
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
      {/* just fix by fiqri oemry */}
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
      {/* newly added by : fiqri oemry */}
      <Route path="/store-info" element={<StorePage />} />
      <Route
        path="/register-store"
        element={
          <NonUserAuth>
            <StoreRegisterPage />
          </NonUserAuth>
        }
      />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      <Route path="/reset-password/:token" element={<ResetPasswordPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
