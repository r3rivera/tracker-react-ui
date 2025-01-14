function Aside(){

    function selectedItem(component){
        console.log("Selected " + component);
    }

    return (
    <aside className="bg-sidebar h-screen w-64 sm:block shadow-xl">
        <div className="p-6">
            <a href="index.html" className="text-white text-3xl font-semibold uppercase hover:text-gray-300">Admin</a>
            <button className="w-full bg-white cta-btn font-semibold py-2 mt-5 rounded-br-lg rounded-bl-lg rounded-tr-lg shadow-lg hover:shadow-xl hover:bg-gray-300 flex items-center justify-center">
                <i className="fas fa-plus mr-3"></i> New Report
            </button>
        </div>
        <nav className="text-white text-base font-semibold pt-3">
            <a onClick={() => {selectedItem('Dashboard')}} className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item">
                <i className="fas fa-tachometer-alt mr-3"></i>
                Appointment & Calendar
            </a>
            <a onClick={() => {selectedItem('Blank')}}className="flex items-center active-nav-link text-white py-4 pl-6 nav-item">
                <i className="fas fa-sticky-note mr-3"></i>
                Vehicle GPS Tracker
            </a>
            <a href="tables.html" className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item">
                <i className="fas fa-table mr-3"></i>
                AI Summarizer
            </a>
            <a href="forms.html" className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item">
                <i className="fas fa-align-left mr-3"></i>
                Forms
            </a>
            <a href="tabs.html" className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item">
                <i className="fas fa-tablet-alt mr-3"></i>
                Tabbed Content
            </a> 
        </nav>
    </aside>
    );
}

export default Aside;