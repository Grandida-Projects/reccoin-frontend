import CompanyDashboardLayout from "../../components/dashboard_components/CompanyDashboardLayout"
import Deposit from "../../components/dashboard_components/Deposit"
import CompanyDashboardComponent from './../../components/dashboard_components/CompanyDashboard';

const CompanyDashboard = () => {
  return (
    <CompanyDashboardLayout active_link={"Dashboard"} dashboard_content={
      <CompanyDashboardComponent/>
    } />
  )
}

export default CompanyDashboard