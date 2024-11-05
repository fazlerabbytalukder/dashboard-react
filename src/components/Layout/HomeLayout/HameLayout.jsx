import { useState } from "react";
import MainDashboard from "../../dashboard/MainDashboard/MainDashboard";
import Sidebar from "../../dashboard/sidebar/Sidebar";

const HameLayout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };


    return (
        <div className="flex h-full overflow-y-auto bg-backColor">
            <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
            <MainDashboard onToggleSidebar={toggleSidebar} />
        </div>
    );
};

export default HameLayout;