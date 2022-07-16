import './featuredInfo.css';
import { ArrowDownward, ArrowUpward } from '@material-ui/icons';

export default function FeaturedInfo() {
  return (
    <div style={{ flexDirection: 'row' }} className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">All Riders</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">2,415</span>
          <span className="featuredMoneyRate">
            +11.4 <ArrowUpward className="featuredIcon positive" />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Active Riders</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">1,415</span>
          <span className="featuredMoneyRate">
            +1.4 <ArrowUpward className="featuredIcon positive" />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Inactive Riders</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">1,000</span>
          <span className="featuredMoneyRate">
            -2.4 <ArrowDownward className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
    </div>
  );
}
