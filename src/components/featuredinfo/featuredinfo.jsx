import "./featuredinfo.css"
import {ArrowDownward, ArrowUpward} from "@material-ui/icons"

export default function featuredinfo() {
    return (
        <div className="featured"> 
            <div className="featuredItem">
                <span className="featuredTitle">Revanue</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$2,430</span>
                    <span className="featuredMoneyRate">-10.90 <ArrowDownward className="featuredIcon negative"/></span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Sales</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$4,030</span>
                    <span className="featuredMoneyRate">-8.00 <ArrowDownward className="featuredIcon negative"/></span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Cost</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$8,40</span>
                    <span className="featuredMoneyRate">+67.90 <ArrowUpward className="featuredIcon"/></span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
        </div>
        
    )
}
