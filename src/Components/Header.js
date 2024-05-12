function Header({ showForm, setShowForm }) {

    const appTitle = "What I've learned lately"

    return (
        <header className="header" >
            <div className="logo">
                <img
                    src="logo.png"
                    alt="Bubble message logo of the app named what I've learned"
                />
                <h1>{appTitle}</h1>
            </div>

            <button
                className="btn btn-large btn-open"
                // 3. Update state variable
                onClick={() => setShowForm((show) => !show)}>
                {showForm ? "Close" : "Share a fact"}
            </button>
        </header>
    )
}

export default Header;