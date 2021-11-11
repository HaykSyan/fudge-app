import { lazy, memo } from "react";

const Navigation = lazy(() => import('../components/dashboard/navigation'));
const DashboardContent = lazy(() => import('./DashboardContent'));

const DashboardLayout = (props) => {

    return (
        <main className="__dashboard d-flex">
            <Navigation />
            <div className="__dashboard_content">
                <DashboardContent />
            </div>
        </main>
    )
} 

export default memo(DashboardLayout);
