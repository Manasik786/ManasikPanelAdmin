import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ReactQuill from "react-quill";
import { Button } from "@material-ui/core";
import { Grid } from "@mui/material";
import "react-quill/dist/quill.snow.css";
import "./mission.css";

export default function UserList() {
  return (
    <div className="productList">
      <Typography
        variant="h5"
        className="productListTitle"
        style={{ color: "#ffba02" }}
      >
        About Us Page
      </Typography>
      <Divider />
      <div className="contentbox">
        <Divider />
        <h5>Banner Title</h5>
        <input type="text" placeholder=" Banner title" />
        <h5>Banner Sub Title</h5>
        <input type="text" placeholder="Sub Title" />
        <h5>About Manasik Description</h5>
        <ReactQuill placeholder="Content" className="textarea" />

        <h5> About Manasik Image (Dimension 540 X 330)</h5>
        <input type="file" placeholder="title" />
        <Divider/>
        <hr/>
        <Divider/>
        <div className="airambulancediv">
         <span>
         <h5> Vission </h5>
          <input type="text" placeholder="Vision" />
         </span>
         <span>
         <h5>Vision Image (Dimension 540 X 330)</h5>
          <input type="file" placeholder="title" />
         </span>
        </div>
        <h5> Vision Description</h5>
        <ReactQuill placeholder="Content" className="textarea" />
        <Divider/>
        <hr/>
        <Divider/>
        <div className="airambulancediv">
         <span>
         <h5>Mission </h5>
          <input type="text" placeholder="Sub Service" />
         </span>
         <span>
         <h5>Mission Image (Dimension 540 X 330)</h5>
          <input type="file" placeholder="title" />
         </span>
        </div>
        <h5>Mission Description</h5>
        <ReactQuill placeholder="Content" className="textarea" />
        <Divider/>
        <hr/>
        <Divider/>
        <div className="airambulancediv">
         <span>
         <h5> Why Manasik</h5>
          <input type="text" placeholder="Sub Service" />
         </span>
         
        </div>
        <h5>Why Manasik Description</h5>
        <ReactQuill placeholder="Content" className="textarea" />
        <Divider/>
        <hr/>
        <div className="airambulancediv">
         <span>
         <h5>CEO Message </h5>
          <input type="text" placeholder="message" />
         </span>
         <span>
         <h5>CEO Image (Dimension 540 X 330)</h5>
          <input type="file" placeholder="title" />
         </span>
        </div>
        <h5>CEO Description</h5>
        <ReactQuill placeholder="Content" className="textarea" />
        <Divider/>
        <hr/>
      </div>

      <Grid item xs={6} sm={6}>
        <Button
          style={{
            backgroundColor: "#ffba02",
            color: "black",
            height: "55px",
            borderRadius: "5px",
          }}
          variant="contained"
          // onClick={getAllRidersData}
        >
          Submit
        </Button>
      </Grid>
    </div>
  );
}
