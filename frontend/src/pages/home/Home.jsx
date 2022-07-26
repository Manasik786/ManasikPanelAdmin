// import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import Chart from "./Chart";
import { userData } from "../../dummyData";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import img from "../../assets/img/logo.jpg";
import { useEffect, useState } from "react";
import axios from "axios";
// import {userData} from "../../dummyData"

export default function Home() {
  // const abcd = [
  //   {
  //     name: "Jan",
  //     "Active User": 4000,
  //   },
  //   {
  //     name: "Feb",
  //     "Active User": 3000,
  //   },
  //   {
  //     name: "Mar",
  //     "Active User": 5000,
  //   },
  //   {
  //     name: "Apr",
  //     "Active User": 4000,
  //   },
  //   {
  //     name: "May",
  //     "Active User": 3000,
  //   },
  //   {
  //     name: "Jun",
  //     "Active User": 2000,
  //   },
  //   {
  //     name: "Jul",
  //     "Active User": 4000,
  //   },
  //   {
  //     name: "Agu",
  //     "Active User": 3000,
  //   },
  //   {
  //     name: "Sep",
  //     "Active User": 4000,
  //   },
  //   {
  //     name: "Oct",
  //     "Active User": 1000,
  //   },
  //   {
  //     name: "Nov",
  //     "Active User": 4000,
  //   },
  //   {
  //     name: "Dec",
  //     "Active User": 3000,
  //   },
  // ];
  const [data, setdata] = useState("");
  const getdata = async () => {
    const { data } = await axios.get("/api/v1/length");

    console.log(data.data);
    setdata(data.data);
  };
  useEffect(() => {
    getdata();
  }, []);
  return (
    <div className="home" style={{ marginTop: "15px" }}>
      <h3>Total Leads {data}</h3>
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
