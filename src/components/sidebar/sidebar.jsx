import "./sidebar.css"
import { LineStyle, Timeline, TrendingUp, PersonOutline,Report ,Beenhere,AttachMoney,Assessment,MailOutline } from "@material-ui/icons";

export default function sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Deshbord</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <LineStyle className="sidebarIcon"/> 
                            Home
                        </li>
                        <li className="sidebarListItem">
                            <Timeline className="sidebarIcon"/> 
                            Analytics
                        </li>
                        <li className="sidebarListItem">
                            <TrendingUp className="sidebarIcon"/> 
                            Sales
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Quick Menu</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <PersonOutline className="sidebarIcon"/> 
                            User
                        </li>
                        <li className="sidebarListItem">
                            <Beenhere className="sidebarIcon"/> 
                            Products
                        </li>
                        <li className="sidebarListItem">
                            <AttachMoney className="sidebarIcon"/> 
                            Transactions
                        </li>
                        <li className="sidebarListItem">
                            <Assessment className="sidebarIcon"/> 
                            Reports
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Notification</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <Timeline className="sidebarIcon"/> 
                            Mail
                        </li>
                        <li className="sidebarListItem">
                            <Timeline className="sidebarIcon"/> 
                            Feedback
                        </li>
                        <li className="sidebarListItem">
                            <MailOutline className="sidebarIcon"/> 
                            Messages
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Staff</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <LineStyle className="sidebarIcon"/> 
                            Manage
                        </li>
                        <li className="sidebarListItem">
                            <Timeline className="sidebarIcon"/> 
                            Analytics
                        </li>
                        <li className="sidebarListItem">
                            <Report className="sidebarIcon"/> 
                            Reports
                        </li>
                    </ul>
                </div>
            </div>   
        </div>
    );
}
