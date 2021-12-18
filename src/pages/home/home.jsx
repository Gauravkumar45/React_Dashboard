import Featuredinfo from "../../components/featuredinfo/featuredinfo"
import Chart from "../../components/chart/chart"
import "./home.css"

export default function home() {
    return (
        <div className="home">
           <Featuredinfo/>
           <Chart/>
        </div>
    )
}
