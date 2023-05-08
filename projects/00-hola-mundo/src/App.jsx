import "./App.css"

export function App() {
    return (

        <article className="tw-followCard">
            <header className="tw-followCard-header" >
                <img 
                className="tw-followCard-avatar"
                alt="Avatar"
                src=" https://unavatar.io/telegram/drsdavidsoft" />
                <div className="tw-followCard-info">
                    <strong>Francisco Gigena</strong>
                    <span className="tw-followCard-infoUserName">@fgigena</span>
                </div>
            </header>

            <aside>
                <button 
                className="tw-followCard-button"
                >Seguir</button>
            </aside>
        </article>

    )
}