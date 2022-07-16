import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { Link } from 'react-router-dom';



function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}



export default function BasicTable() {
  function handleEdit() {
   
  }

  function handleView() {
    alert("View");
  }

  return (
    <div className="">
      <Typography
        variant="h5"
        className="productListTitle"
        style={{ color: "#ffba02" }}
      >
        Manasik Pages
      </Typography>
      <Divider />
      <Divider />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ maxWidth: 50 }}>No</TableCell>
              <TableCell align="left">Pages</TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              
              <TableCell component="th" scope="row">
                1
              </TableCell>
              <TableCell align="left">Home</TableCell>
              <TableCell align="right">
                <Link to='/slide'>
                <ModeEditIcon onClick={handleEdit} className="sbutton" />
                </Link>
                <VisibilityIcon onClick={handleView} className="sbutton" />
              </TableCell>
            </TableRow>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              
              <TableCell component="th" scope="row">
                1
              </TableCell>
              <TableCell align="left">Air Ambulance</TableCell>
              <TableCell align="right">
                <Link to='/AirAmbulance'>
                <ModeEditIcon onClick={handleEdit} className="sbutton" />
                </Link>
                <VisibilityIcon onClick={handleView} className="sbutton" />
              </TableCell>
            </TableRow>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                2
              </TableCell>
              <TableCell align="left">Aviation</TableCell>
              <TableCell align="right">
                <Link to='/editAviation'>
                <ModeEditIcon onClick={handleEdit} className="sbutton" />
                </Link>
                <VisibilityIcon onClick={handleView} className="sbutton" />
              </TableCell>
            </TableRow>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                3
              </TableCell>
              <TableCell align="left">Packages Inquery</TableCell>
              <TableCell align="right">
               <Link to="/packages">
               <ModeEditIcon onClick={handleEdit} className="sbutton" />
               </Link>
                <VisibilityIcon onClick={handleView} className="sbutton" />
              </TableCell>
            </TableRow>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                4
              </TableCell>
              <TableCell align="left">About Us</TableCell>
              <TableCell align="right">
               <Link to='/editaboutus'>
               <ModeEditIcon onClick={handleEdit} className="sbutton" />
               </Link>
                <VisibilityIcon onClick={handleView} className="sbutton" />
              </TableCell>
            </TableRow>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                5
              </TableCell>
              <TableCell align="left">Careers</TableCell>
              <TableCell align="right">
                <ModeEditIcon onClick={handleEdit} className="sbutton" />
                <VisibilityIcon onClick={handleView} className="sbutton" />
              </TableCell>
            </TableRow>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                6
              </TableCell>
              <TableCell align="left">Privacy Policy</TableCell>
              <TableCell align="right">
                <Link to  ='/privacy'>
                <ModeEditIcon onClick={handleEdit} className="sbutton" />
                </Link>
                <VisibilityIcon onClick={handleView} className="sbutton" />
              </TableCell>
            </TableRow>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                7
              </TableCell>
              <TableCell align="left">Term and Condition</TableCell>
              <TableCell align="right">
                <Link to='/terms'>
                <ModeEditIcon onClick={handleEdit} className="sbutton" />
                </Link>
                <VisibilityIcon onClick={handleView} className="sbutton" />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
