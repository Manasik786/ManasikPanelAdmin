// import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import Chart from "./Chart";
import { userData } from "../../dummyData";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import img from "../../assets/img/logo.jpg";
// import {userData} from "../../dummyData"

export default function Home() {
 
  return (
    <div className="home" style={{ marginTop: "15px" }}>
      <h2 style={{ textAlign: "center", marginTop: "30px" }}>
        Manasik Aviation
      </h2>
      <Chart
        data={userData}
        title="User Analytics"
        grid
        dataKey="Active User"
      />
    </div>
  );
}
