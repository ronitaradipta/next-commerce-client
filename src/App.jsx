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
import OTPverificationPage from "./pages/OTPverificationPage";
import CartPage from "./pages/CartPage";
import OrderlistUser from "./pages/OrderlistUser";

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
        path="/cart"
        element={
          <UserAuth>
            <HeaderFooter>
              <CartPage />
            </HeaderFooter>
          </UserAuth>
        }
      />

      <Route
        path="/checkout/:idStore"
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
      <Route path="/store-info/:idData" element={<StorePage />} />
      <Route
        path="/register-store"
        element={
          <UserAuth>
            <StoreRegisterPage />
          </UserAuth>
        }
      />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />

      <Route path="/reset-password/:token" element={<ResetPasswordPage />} />

      <Route
        path="/otp-verification"
        element={
          <NonUserAuth>
            <OTPverificationPage />
          </NonUserAuth>
        }
      />
      <Route path="*" element={<ErrorPage />} />

      <Route 
        path="/order-list" 
        element={
          <UserAuth>
            <OrderlistUser/>
          </UserAuth>
          }/>
    </Routes>
  );
}

export default App;
