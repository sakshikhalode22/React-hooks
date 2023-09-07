import { useState } from "react";
import {
  Button,
  Card,
  Typography,
  CardContent,
  CardActions,
  Grid,
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
} from "@mui/material";


const Basic = () => {
  /*When HooksExamples rendered useState() hook helps to set both firstName and lastname initial 
  value  that is "Saira" and "Joseph" respectively*/
  const [firstName, setFirstName] = useState("Saira");
  const [lastName, setLastName] = useState("Joseph");

  return (
    <>
      <Grid item xs={2} sm={4} md={4}>
        <Card style={{ backgroundColor: "#cdb4db", minHeight: 240 }}>
          <CardContent style={{ marginTop: 100 }}>
            <Typography sx={{ fontSize: 14 }} gutterBottom>
              Basics of useState
            </Typography>
            <Typography variant="body2">
              {/* ‘firtName’ and 'lastName' is the state of the component. 
            useState() returns a state  with its initial value 
            "Saira" and "Joseph" respectively and ‘setFirstName’ & setLastName method.*/}
              {firstName} {lastName}
            </Typography>
          </CardContent>
          <CardActions>
            {/* When user clicks on the button, click event is fired and the 
            value of ‘lastName’ state is updated to 'Thomas' through setName method. */}
            <Button
              size="small"
              variant="contained"
              style={{ margin: "auto" }}
              onClick={() => setLastName("Thomas")}
            >
              Set Last Name
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </>
  );
};

const Demo1 = () => {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <Grid item xs={2} sm={4} md={4}>
        <Card style={{ backgroundColor: "#ffc8dd", minHeight: 240 }}>
          <CardContent style={{ marginTop: 100 }}>
            <Typography sx={{ fontSize: 14 }} gutterBottom>
              Counter Increament Example useState
            </Typography>
            <Typography variant="body2">counter:{counter}</Typography>
          </CardContent>
          <CardActions>
            <Button
              variant="contained"
              onClick={() => setCounter(() => counter + 1)}
              style={{ margin: "auto" }}
              size="small"
            >
              Increment
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </>
  );
};

const Demo2 = () => {
  const [employees, setEmployees] = useState([
    { empId: 1234, name: "John", designation: "SE" },
    { empId: 4567, name: "Tom", designation: "SSE" },
    { empId: 8910, name: "Kevin", designation: "TA" },
  ]);
  const addEmployee = () => {
    // to set new employee in given state we have to use useState method i.e set method
    setEmployees([
      ...employees, //previous state of employees // mandatory to take previous state if we want to add or update
      { empId: 6789, name: "Sam", designation: "TL" }, //add new employee in previous
    ]);
  };
  return (
    <>
      <Grid item xs={2} sm={4} md={4}>
        <Card style={{ backgroundColor: "#ffafcc", minHeight: 240 }}>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} gutterBottom>
              Employee Addition Example useState
            </Typography>
            <Typography variant="body2">
              <TableContainer component={Paper}>
                <Table
                  sx={{ minWidth: 200 }}
                  size="small"
                  aria-label="a dense table"
                >
                  <TableHead>
                    <TableRow>
                      <TableCell align="left">EmpId</TableCell>
                      <TableCell align="left">Name</TableCell>
                      <TableCell align="left">Designation</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {/* Here employees are mapping to the row just as js */}
                    {employees.map((emp) => {
                      return (
                        <TableRow
                          key={emp.name}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell align="left">{emp.empId}</TableCell>
                          <TableCell align="left">{emp.name}</TableCell>
                          <TableCell align="left">{emp.designation}</TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </TableContainer>
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              variant="contained"
              onClick={addEmployee}
              style={{ margin: "auto" }}
              size="small"
            >
              {/* once utton clicked addEmployee method getting called */}
              Add an Employee
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </>
  );
};
// here is the example how to export multiple functional component. otherwise, we can use single component with multiple grid
export { Basic, Demo1, Demo2 };
