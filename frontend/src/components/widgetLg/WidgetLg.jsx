import './widgetLg.css';
import manImg from '../../assets/manPlaceholder.jpg';

export default function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={'widgetLgButton ' + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Summary</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Riders</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Location</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src={manImg} alt="" className="widgetLgImg" />
            <span className="widgetLgName">Anas Butt</span>
          </td>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgAmount">Saddar</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src={manImg} alt="" className="widgetLgImg" />
            <span className="widgetLgName">Ali Khan</span>
          </td>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgAmount">Gulshan</td>
          <td className="widgetLgStatus">
            <Button type="Declined" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src={manImg} alt="" className="widgetLgImg" />
            <span className="widgetLgName">Ali Asif</span>
          </td>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgAmount">Defense</td>
          <td className="widgetLgStatus">
            <Button type="Pending" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src={manImg} alt="" className="widgetLgImg" />
            <span className="widgetLgName">Hassan Ali</span>
          </td>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgAmount">DHA</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
      </table>
    </div>
  );
}
