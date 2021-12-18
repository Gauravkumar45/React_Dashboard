import React from 'react'
import "./topbar.css"
import { NotificationsNone, Language, Settings } from '@material-ui/icons';

export default function topbar() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topleft">
                    <span className="logo">MY-DESHBORD</span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer"></div>
                    <NotificationsNone/>
                    <span className="topIconBadge">2</span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer"></div>
                    <Language/>
                    <span className="topIconBadge">2</span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer"></div>
                    <Settings/>
                    <span className="topIconBadge">2</span>
                </div>
            </div>
        </div>
    );
}
