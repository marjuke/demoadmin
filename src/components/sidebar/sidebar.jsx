import "./sidebar.css"
import { LineStyle } from "@material-ui/icons";

export default function sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <LineStyle />
                            Home
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
