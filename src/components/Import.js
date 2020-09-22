import React from "react";
import {useState} from 'react'
import {
  Button,
  Container,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import IconButton from "@material-ui/core/IconButton";

const Import = (props) => {
  const [index, setIndex] = useState(0);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    console.log(event.currentTarget)
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const someFunc =(event)=> {
    console.log(event.currentTarget)
    setIndex(event.currentTarget);
    props.removeMake(index)
    handleClose()
}
  return (
    <Container maxWidth="lg" className="car-container">
      <div className="flex-container">
        <Button variant="contained" color="primary" onClick={props.fetchMakes}>
          Import
        </Button>
      </div>
      <h2>Length : {props.makes.length}</h2>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell align="left">Make</TableCell>
            
            <TableCell align="center">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.makes.map((car, idx) => (
            <TableRow key={car.MakeId}>
              <TableCell>{idx}</TableCell>
              <TableCell component="th" scope="row">
                {car.MakeId}
              </TableCell>
              <TableCell>{car.MakeName}</TableCell>
              
              <TableCell align="center">
                <IconButton aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                  <MoreVertIcon />
                </IconButton>
                <Menu
                      id="simple-menu"
                      anchorEl={anchorEl}
                      keepMounted
                      open={Boolean(anchorEl)}
                      onClose={handleClose}
                    >
                      <MenuItem onClick={someFunc}>Delete</MenuItem>
                      
                    </Menu>
              </TableCell>

              <TableCell></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
};

export default Import;
