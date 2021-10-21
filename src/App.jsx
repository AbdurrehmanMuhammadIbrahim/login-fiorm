
import './App.css';
import axios from 'axios';
import { useState, useEffect } from "react"
import * as React from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { useFormik } from 'formik';
import Button from "@mui/material/Button";
import Signup from "/components/signup";
import Login from "/components/login";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

// import MenuIcon from '@mui/icons-material/Menu';
// import SearchIcon from '@mui/icons-material/Search';




import * as Yup from 'yup';
const SignupSchema = Yup.object({
  firstName: Yup
  .string('Enter your First Name')
    .min(3, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Enter your FirstName'),
  lastName: Yup
  .string()
    .min(3, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Enter your LastName'),
  email: Yup

  .string('Enter your Email')
  .email('Enter a valid Email')
  
    .min(6, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
    password:Yup
    .string('Enter your Password')
  .required('Enter a password')
    .min(6, 'password is weak!')
    .required('Please enter password here'),
});
function onSubmitFunction(values) {
  console.log("values: ", values)
}

var baseUrl ={
  dev :"http://localhost:5000",
  prod : ""
}

function App(){

//  const [user,setUsers] = useState({})
//   useEffect(() => {

//     axios.get(`https://localhost:5000/api/v1/profile`)
//       .then(res => {
//         console.log(res.data);
//         setUsers(res.data)
//       });

//     return () => {
//       console.log("cleanup");
//     };
//   }, []);


<Router>
<div>

<Switch>

      
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </div>
</Router>
  

  const formik = useFormik({
    validationSchema: SignupSchema,
    initialValues: {
      firstName:'',
      lastName:'',
      email: '',
      password: '',
    },
   

    onSubmit: onSubmitFunction

  });
 
  function onSubmitFunction(values) {
    console.log("values: ", values)
    axios.post(`${baseUrl}/api/v1/profile`, {
      name: values.name,
      email: values.email,
      address: values.address
    })
      .then(res => {
        console.log(res.data);
        setToggleGetUser(!toggleGetUser)
      });
  }

  const [users, setUsers] = useState([]);
  const [toggleGetUser, setToggleGetUser] = useState(false);

  useEffect(() => {

    axios.get(`${baseUrl}/api/v1/profile`)
      .then(res => {
        console.log(res.data);
        setUsers(res.data)
      });

    return () => {
      console.log("cleanup");
    };
  }, [toggleGetUser]);


  return (

  <div className="main">

    






{/* const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
})); */}


  
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            MUI
          </Typography>

          <Link  to="/login">Services</Link>
          {/* <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search> */}
        </Toolbar>
      </AppBar>
    </Box>

























    <div className="form">

     <h1>SIGNUP FORM</h1>

      <form onSubmit={formik.handleSubmit}>
      <Stack spacing={2}>
      <TextField
          fullWidth
          className="text"
          color="secondary"

          id="firstName"
          name=""
          label="FisrtName"
          value={formik.values.firstName}
          onChange={formik.handleChange}
          error={formik.touched.firstName && Boolean(formik.errors.firstName)}
          helperText={formik.touched.firstName && formik.errors.firstName}
        />
      <TextField
          fullWidth
          className="text"
          color="secondary"
          id="lastName"
          name="lastName"
          label="lastName"
          value={formik.values.lastName}
          onChange={formik.handleChange}
          error={formik.touched.lastName && Boolean(formik.errors.lastName)}
          helperText={formik.touched.lastName && formik.errors.lastName}
        />
        <TextField
          fullWidth
          color="secondary"
          className="text"
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          fullWidth
          color="secondary"
          className="text"
          id="password"
          name="password"
          label="Password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <Button color="secondary" variant="contained" fullWidth type="submit">
          Submit
        </Button>
        </Stack>
      </form>
      </div>
    </div>
   
  );

}
  export default App;