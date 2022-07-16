import './widgetSm.css';
import { Link } from 'react-router-dom';
import manImg from '../../assets/manPlaceholder.jpg';
import { Visibility } from '@material-ui/icons';

export default function WidgetSm() {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Rider Requests</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img src={manImg} alt="" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Anas Butt</span>
            <span className="widgetSmUserTitle">+92 333 1234567</span>
          </div>
          <Link to="/user/1" style={{ textDecoration: 'none' }}>
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon" />
              Display
            </button>
          </Link>
        </li>
        <li className="widgetSmListItem">
          <img src={manImg} alt="" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Ali Khan</span>
            <span className="widgetSmUserTitle">+92 333 1234567</span>
          </div>
          <Link to="/user/1" style={{ textDecoration: 'none' }}>
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon" />
              Display
            </button>
          </Link>
        </li>
        <li className="widgetSmListItem">
          <img src={manImg} alt="" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Ali Asif</span>
            <span className="widgetSmUserTitle">+92 333 1234567</span>
          </div>
          <Link to="/user/1" style={{ textDecoration: 'none' }}>
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon" />
              Display
            </button>
          </Link>
        </li>
        <li className="widgetSmListItem">
          <img src={manImg} alt="" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Rehman Khan</span>
            <span className="widgetSmUserTitle">+92 333 1234567</span>
          </div>
          <Link to="/user/1" style={{ textDecoration: 'none' }}>
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon" />
              Display
            </button>
          </Link>
        </li>
        <li className="widgetSmListItem">
          <img src={manImg} alt="" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Hassan Ali</span>
            <span className="widgetSmUserTitle">+92 333 1234567</span>
          </div>
          <Link to="/user/1" style={{ textDecoration: 'none' }}>
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon" />
              Display
            </button>
          </Link>
        </li>
      </ul>
    </div>
  );
}
