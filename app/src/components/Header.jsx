import {getDayOfWeek} from "../App.jsx";

export const Header = ( ) => {
    const date = new Date();
    return(
        <div className="head">
            <div className="headerobjectswrapper">
                <header>Allgood Times</header>
            </div>
            <div className="subhead">Nashville, TN
                - {getDayOfWeek(date)} {date.getDate()}, {date.getFullYear()}</div>
        </div>
    )
}