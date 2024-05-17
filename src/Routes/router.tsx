import AdminEnterCodePage from "../pages/AdminEnterCodePage";
import AdminFinancialPage from "../pages/AdminFinancialPage";
import AdminForgotPasswordCodePage from "../pages/AdminForgotPasswordCodePage";
import AdminForgotPasswordPage from "../pages/AdminForgotPasswordPage";
import AdminLoginPage from "../pages/AdminLoginPage";
import AdminNewPasswordPage from "../pages/AdminNewPasswordPage";
import AdminPanelPage from "../pages/AdminPanelPage";
import AdminSellerPage from "../pages/AdminSellerPage";
import AdminSettingsPage from "../pages/AdminSettingsPage";
import AdminSignupPage from "../pages/AdminSignupPage";
import AdminSupportPage from "../pages/AdminSupportPage";
import AdminUserPage from "../pages/AdminUserPage";
import ErrorPage from "../pages/ErrorPage";
import SellerEnterCodePage from "../pages/SellerEnterCodePage";
import SellerForgotPasswordEnterCode from "../pages/SellerForgotPasswordEnterCode";
import SellerForgotPasswordPage from "../pages/SellerForgotPasswordPage";
import SellerLoginPage from "../pages/SellerLoginPage";
import SellerNewPasswordPage from "../pages/SellerNewPasswordPage";
import SellerPanelPage from "../pages/SellerPanelPage";
import SellerProductPage from "../pages/SellerProductPage";
import SellerSettingsPage from "../pages/SellerSettingsPage";
import SellerSignupPage from "../pages/SellerSignupPage";

const router = [
  {
    path: "/admin-panel/*",
    element: <AdminPanelPage />,
    children: [
      { path: "user", element: <AdminUserPage /> },
      { path: "seller", element: <AdminSellerPage /> },
      { path: "financial", element: <AdminFinancialPage /> },
      { path: "support", element: <AdminSupportPage /> },
      { path: "settings", element: <AdminSettingsPage /> },
    ],
  },
  { path: "/admin-panel/login", element: <AdminLoginPage /> },
  { path: "/admin-panel/enter-code", element: <AdminEnterCodePage /> },
  { path: "/admin-panel/signup", element: <AdminSignupPage /> },
  { path: "/admin-panel/forgot-password", element: <AdminForgotPasswordPage /> },
  { path: "/admin-panel/forgot-password/new-password", element: <AdminNewPasswordPage /> },
  { path: "/admin-panel/forgot-password/enter-code", element: <AdminForgotPasswordCodePage /> },
  {
    path: "/seller-panel/*",
    element: <SellerPanelPage />,
    children: [
      { path: "product", element: <SellerProductPage /> },
      { path: "settings", element: <SellerSettingsPage /> },
    ],
  },
  { path: "/seller-panel/login", element: <SellerLoginPage /> },
  { path: "/seller-panel/enter-code", element: <SellerEnterCodePage /> },
  { path: "/seller-panel/signup", element: <SellerSignupPage /> },
  { path: "/seller-panel/forgot-password", element: <SellerForgotPasswordPage /> },
  { path: "/seller-panel/forgot-password/new-password", element: <SellerNewPasswordPage /> },
  { path: "/seller-panel/forgot-password/enter-code", element: <SellerForgotPasswordEnterCode /> },
  { path: "*", element: <ErrorPage /> },
];

export default router;
