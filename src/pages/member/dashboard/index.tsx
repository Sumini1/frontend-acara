import DashboardLayout from "@/components/layouts/DashboardLayout";
import Dashboard from "@/components/views/Member/Dashboard";


const DashboardMemeberPage = () => {
  return (
    <DashboardLayout title="Dashboard" description="Dashboard member" type="member">
      <Dashboard />
    </DashboardLayout>
  );
};

export default DashboardMemeberPage;
