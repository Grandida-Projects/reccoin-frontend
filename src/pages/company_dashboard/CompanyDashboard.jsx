import CompanyDashboardLayout from "../../components/dashboard_components/CompanyDashboardLayout"
import CompanyDashboardComponent from "./CompanyDashboardComponent"

const CompanyDashboard = () => {
  return (
    <CompanyDashboardLayout active_link={"Dashboard"} dashboard_content={
      <CompanyDashboardComponent/>
    } />
  )
}

export default CompanyDashboard