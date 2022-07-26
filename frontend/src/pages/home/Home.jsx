import Chart from '../../components/chart/Chart';
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo';
import './home.css';
import { userData } from '../../dummyData';
import WidgetSm from '../../components/widgetSm/WidgetSm';
import WidgetLg from '../../components/widgetLg/WidgetLg';
import img from '../../assets/img/logo.jpg'

export default function Home() {
  return (
    <div className="home" style={{ marginTop: '15px' }}>
     <h2  style={{ textAlign: 'center',marginTop:'30px' }}>Manasik Aviation</h2>
     {/* <img className='mainlogo' src={img}/> */}
    </div>
  );
}
