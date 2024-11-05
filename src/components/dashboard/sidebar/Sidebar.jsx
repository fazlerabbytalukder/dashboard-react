const Sidebar = ({ isOpen, onClose }) => {
    return (
        <div className={`fixed inset-y-0 top-0 z-30 h-[100vh] w-[365px] transform bg-white transition-transform duration-200 ${isOpen ? "translate-x-0" : "-translate-x-full"
            } md:relative md:translate-x-0`}>
            <div className="block md:hidden">
                <button
                    type="button"
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 text-gray-400 hover:bg-gray-200 rounded-full"
                >
                    <svg
                        className="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                    <span className="sr-only">Close sidebar</span>
                </button>
            </div>
            <p>Sidebar</p>
        </div>
    );
};

export default Sidebar;