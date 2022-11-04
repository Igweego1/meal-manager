import { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import AuthLayout from "./components/Layout/AuthLayout";
import ChangePassword from "./pages/ChangePassword";
import Consumptions from "./pages/Consumptions";
import ContactAdmin from "./pages/ContactAdmin";
import ContactAdminPage from "./pages/ContactAdminPage";
import EmailVerification from "./pages/EmailVerification";
import FinanceDashboardOverview from "./pages/FinanceDashboardOverview";
import ForgotPassword from "./pages/ForgotPassword";
import HRDashboardOverview from "./pages/HRDashboardOverview";
import HRStaffDashboard from "./pages/HRStaffDashboard";
import RegisterStaff from "./pages/RegisterStaff";
import ResetPassword from "./pages/ResetPassword";
import SignIn from "./pages/SignIn";
import StaffDashboardOverview from "./pages/StaffDashboardOverview";
import VendorDashboardOverview from "./pages/VendorDashboardOverview";
import { routes } from "./Utilities/Routes";

function App() {
  return (
    <Fragment>
      <Router>
        <AuthLayout>
          <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path={routes.ForgotPassword} element={<ForgotPassword />} />
            <Route path={routes.ResetPassword} element={<ResetPassword />} />
            <Route
              path={routes.EmailVerification}
              element={<EmailVerification />}
            />
            <Route path={routes.ChangePassword} element={<ChangePassword />} />
            <Route path={routes.ContactAdmin} element={<ContactAdmin />} />
            <Route
              path={routes.ContactAdminPage}
              element={<ContactAdminPage />}
            />
            <Route
              path={routes.StaffDashboardOverview}
              element={<StaffDashboardOverview />}
            />
            <Route path={routes.Consumptions} element={<Consumptions />} />
            <Route
              path={routes.HRDashboardOverview}
              element={<HRDashboardOverview />}
            />
            <Route
              path={routes.HRStaffDashboard}
              element={<HRStaffDashboard />}
            />
            <Route path={routes.RegisterStaff} element={<RegisterStaff />} />
            <Route
              path={routes.VendorDashboardOverview}
              element={<VendorDashboardOverview />}
            />
            <Route
              path={routes.FinanceDashboardOverview}
              element={<FinanceDashboardOverview />}
            />
          </Routes>
        </AuthLayout>
      </Router>
    </Fragment>
  );
}

export default App;
