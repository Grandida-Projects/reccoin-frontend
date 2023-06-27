import CompanyDashboardLayout from "../../components/dashboard_components/CompanyDashboardLayout"
import CompanyTransactions from './../../components/company_transactions/index';

const CompanyDashboard = () => {
  return <CompanyDashboardLayout active_link={"Dashboard"} dashboard_content={<CompanyTransactions />} />;
}

export default CompanyDashboard