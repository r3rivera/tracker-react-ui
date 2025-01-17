function Container(props){
    return (
        <div className="w-full flex flex-col h-screen overflow-y-hidden">
            <div className="w-full h-screen overflow-x-hidden">
                <main className="w-full flex-grow p-6">
                    {props.children}
                </main>
            </div>
        </div>
    );

}

export default Container;