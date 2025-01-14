function Container(props){
    return (
        <div className="w-full flex flex-col h-screen overflow-y-hidden">
            <header className="w-full items-center bg-white py-2 px-6 hidden sm:flex">
            </header>
            <div className="w-full h-screen overflow-x-hidden border-t flex flex-col">
                <main className="w-full flex-grow p-6">
                    {props.children}
                </main>
            </div>
        </div>
    );

}

export default Container;