import { Routes, Route, BrowserRouter, HashRouter } from "react-router-dom";
import Accounts from "./pages/accounts/account";
import AuthWrapper from "./pages/auth/authLayout";
import ExistingCustomer from "./pages/auth/existingCustomer";
import LoginComponent from "./pages/auth/login";
import NewCustomer from "./pages/auth/new-customer/new-customer";
import SignUpComponent from "./pages/auth/signUp";
import VerifyOtpComponent from "./pages/auth/verifyOtp";
import Dashboard from "./pages/dashboard/dashboard";
import Deposit from "./pages/deposit/deposit";
import ExhangeRates from "./pages/exchangeRates/exchangeRates";
import Landing from "./pages/landing/landing";
import Layout from "./pages/layout/layout";
import Loans from "./pages/loans/loans";
import OtherServices from "./pages/otherServices/otherServices";
import Payments from "./pages/payments/payments";
import Portfolio from "./pages/portfolio/portfolio";
import Transfers from "./pages/transfers/transfers";

export default function Router() {
  return (
    <BrowserRouter>
      <>
        <Routes>
          <Route path="/">
            <Route index element={<Landing />} />
          </Route>

          <Route path="/login" element={<AuthWrapper />}>
            <Route index element={<LoginComponent />} />
          </Route>
          <Route path="/verifyOtp" element={<AuthWrapper />}>
            <Route index element={<VerifyOtpComponent />} />
          </Route>


          <Route path="/signUp" element={<AuthWrapper />}>
            <Route index element={<SignUpComponent />} />
          </Route>

          <Route path="/existingCustomer" element={<AuthWrapper />}>
            <Route index element={<ExistingCustomer />} />
          </Route>
          <Route path="/newCustomer" element={<NewCustomer />} />
          <Route path="/dashboard" element={<Layout />}>
            <Route index element={<Dashboard />} />
          </Route>
          <Route path="/accounts" element={<Layout />}>
            <Route index element={<Accounts />} />
          </Route>
          <Route path="/portfolio" element={<Layout />}>
            <Route index element={<Portfolio />} />
          </Route>
          <Route path="/transfers" element={<Layout />}>
            <Route index element={<Transfers />} />
          </Route>
          <Route path="/payments" element={<Layout />}>
            <Route index element={<Payments />} />
          </Route>
          <Route path="/deposit" element={<Layout />}>
            <Route index element={<Deposit />} />
          </Route>
          <Route path="/loans" element={<Layout />}>
            <Route index element={<Loans />} />
          </Route>
          <Route path="/exchangeRates" element={<Layout />}>
            <Route index element={<ExhangeRates />} />
          </Route>
          <Route path="/otherServices" element={<Layout />}>
            <Route index element={<OtherServices />} />
          </Route>
        </Routes>
      </>
    </BrowserRouter>
  );
}
