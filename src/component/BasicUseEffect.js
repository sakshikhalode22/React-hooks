import { useState, useEffect } from "react";
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
  Stack,
} from "@mui/material";
import axios from "axios";

const Basic1 = () => {
  const [name, setName] = useState("Sakshi");
  const [surname, setSurname] = useState("Khalode");
  // 1. No dependency
  // When second parameter is not passed then useEffect executes once after component mounts and every time the component gets updated
  useEffect(() => {
    console.log("component mounted or updated");
  });
  // 2. An Empty array
  // When second parameter is an empty array then useEffect executes only once after component mounts
  useEffect(() => {
    console.log("component mounted");
  }, []);
  // 3. Props or State
  // When some props or state is passed as a second parameter then useEffect executes once after component mounts and then every time any dependency value changes i.e. when name will change this will execute
  useEffect(() => {
    console.log("called when name changed");
  }, [name]);

  return (
    <>
      <Grid item xs={2} sm={4} md={4}>
        <Card style={{ backgroundColor: "#bde0fe", minHeight: 240 }}>
          <CardContent style={{ marginTop: 100 }}>
            <Typography sx={{ fontSize: 14 }} gutterBottom>
              Basics of useEffect
            </Typography>
            <Typography variant="body2">
              {name} {surname}
            </Typography>
          </CardContent>
          <CardActions>
            <Stack direction="row" spacing={14}>
              <Button
                size="small"
                variant="contained"
                onClick={() => {
                  setName("Ann");
                }}
              >
                Change Name
              </Button>
              <Button
                size="small"
                variant="contained"
                onClick={() => {
                  setSurname("Xiao");
                }}
              >
                Change Surname
              </Button>
            </Stack>
          </CardActions>
        </Card>
      </Grid>
    </>
  );
};

const Demo3 = () => {
  const [employees, setEmployees] = useState([]);
  const addEmployee = () => {
    setEmployees([
      ...employees,
      { empId: 6789, name: "Clara", designation: "TL" },
    ]);
  };
  useEffect(() => {
    axios.get("http://localhost:4500/employee").then((result) => setEmployees(result.data));
  }, []);
  return (
    <>
      <Grid item xs={2} sm={4} md={4}>
        <Card style={{ backgroundColor: "#a2d2ff", minHeight: 240 }}>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} gutterBottom>
              Employee Addition using axios and useEffect
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
              {/* once button clicked addEmployee method getting called */}
              Add an Employee
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </>
  );
};

const Demo4 = () => {
  useEffect(() => {
    return () => console.log("component will unmount")
  }, [])
  return (
    <>
      <Grid item xs={2} sm={4} md={4}>
        <Card style={{ backgroundColor: "#ccb5f0", minHeight: 240 }}>
          <CardContent style={{ marginTop: 100 }}>
            <Typography sx={{ fontSize: 14 }} gutterBottom>
              component unmount example useEffect
            </Typography>
            <Typography variant="body2">
              Component mounted<br/>
              <small>(check console from index.js file)</small>
            </Typography>
          </CardContent>
          
        </Card>
      </Grid>
    </>
  );

};



export { Basic1, Demo3, Demo4 };
