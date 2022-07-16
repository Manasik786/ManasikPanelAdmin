import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ReactQuill from "react-quill";
import { Button } from "@material-ui/core";
import { Grid } from "@mui/material";
import "react-quill/dist/quill.snow.css";
import "./ambulance.css";

export default function UserList() {
  return (
    <div className="productList">
      <Typography
        variant="h5"
        className="productListTitle"
        style={{ color: "#ffba02" }}
      >
        Air Ambulance
      </Typography>
      <Divider />
      <div className="contentbox">
        <Divider />
        <h5>Banner Title</h5>
        <input type="text" placeholder=" Banner title" />
        <h5>Banner Sub Title</h5>
        <input type="text" placeholder="Sub Title" />
        <h5>Service Description</h5>
        <ReactQuill placeholder="Content" className="textarea" />

        <h5>Image (Dimension 540 X 330)</h5>
        <input type="file" placeholder="title" />
        <Divider/>
        <hr/>
        <Divider/>
        <div className="airambulancediv">
         <span>
         <h5> Sub Service # 1</h5>
          <input type="text" placeholder="Sub Service" />
         </span>
         <span>
         <h5>Image (Dimension 540 X 330)</h5>
          <input type="file" placeholder="title" />
         </span>
        </div>
        <h5>Sub Service Description</h5>
        <ReactQuill placeholder="Content" className="textarea" />
        <Divider/>
        <hr/>
        <Divider/>
        <div className="airambulancediv">
         <span>
         <h5> Sub Service # 2</h5>
          <input type="text" placeholder="Sub Service" />
         </span>
         <span>
         <h5>Image (Dimension 540 X 330)</h5>
          <input type="file" placeholder="title" />
         </span>
        </div>
        <h5>Sub Service Description</h5>
        <ReactQuill placeholder="Content" className="textarea" />
        <Divider/>
        <hr/>
        <Divider/>
        <div className="airambulancediv">
         <span>
         <h5> Sub Service # 3</h5>
          <input type="text" placeholder="Sub Service" />
         </span>
         <span>
         <h5>Image (Dimension 540 X 330)</h5>
          <input type="file" placeholder="title" />
         </span>
        </div>
        <h5>Sub Service Description</h5>
        <ReactQuill placeholder="Content" className="textarea" />
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
