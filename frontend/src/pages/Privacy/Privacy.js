import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ReactQuill from 'react-quill';
import { Button } from "@material-ui/core";
import { Grid } from "@mui/material";
import 'react-quill/dist/quill.snow.css';
import './privacy.css'



export default function UserList() {
  return (
    <div className="productList">
      <Typography
        variant="h5"
        className="productListTitle"
        style={{ color: "#ffba02" }}
      >
        Privacy Policy
      </Typography>
      <Divider />
      <div className="contentbox">
      <Divider />
      <h5>Content</h5>
      <input type='text' placeholder="title"/>
      <h5>Content</h5>
      <ReactQuill 
          placeholder='Content'
          className="textarea"
         />
      
         <h5>Image (Dimension 540 X 330)</h5>
         <input type='file' placeholder="title"/>
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
