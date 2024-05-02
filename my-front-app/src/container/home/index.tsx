// import { useState } from "react";
// import { Card, Form, Button } from "react-bootstrap";
// // import img2 from "./img/img2.jpg";
// import img1 from "./img/img1.jpg";
// import logo from "../home/img/logo.png";
// function Home() {

//   const [currentStep, setCurrentStep] = useState(1);
//   const [carCount, setCarCount] = useState(0);
//   const handleCarCountChange = (e) => {
//     setCarCount(parseInt(e.target.value));
//   };
//   const handleSubmitStep1 = () => {
//     setCurrentStep(2);
//   };
//   const renderCarFields = () => {
//     const carFields = [];
//     for (let i = 0; i < carCount; i++) {
//       carFields.push(
//         <fieldset key={i}>
//           <legend>Car {i + 1}</legend>
//           <FormGroup className="mb-3" controlId={`matricule_${i}`}>
//             <FormLabel>Matricule</FormLabel>
//             <FormControl type="text" placeholder="Enter matricule" />
//           </FormGroup>
//           <FormGroup className="mb-3" controlId={`contract_number_${i}`}>
//             <FormLabel>Contract Number</FormLabel>
//             <FormControl type="text" placeholder="Enter contract number" />
//           </FormGroup>
//           <FormGroup className="mb-3" controlId={`insurance_type_${i}`}>
//             <FormLabel>Insurance Type</FormLabel>
//             <FormControl as="select">
//               <option>Choose...</option>
//               <option>Comprehensive</option>
//               <option>Third Party</option>
//               <option> all-risk</option>
//             </FormControl>
//           </FormGroup>
//         </fieldset>
//       );
//     }
//     return carFields;
//   };
//   return (
//     <div className="container-fluid d-flex align-items-center justify-content-center"  style={{height:'100vh'}}>
//       <div className="row" style={{height:'100%'}}>
//         <div className="col-6 container-fluid">
//           <img src={img1} alt="img1" height="100%" width="100%" />
//         </div>
//         <div className="col-md-6 d-flex align-items-center justify-content-center">

//             {/* <div className="container-fluid">
//               <div className="row">
//                 <div className="col-md-6 height="100%">
//                   <img src={img2} alt="img1" height="100%" width="105%" />
//                 </div>

//                 <div className="col-md-6 align-items-center justify-content-center">
//                   <Card style={{ margin: "10%" }}>
//                     <CardBody>
//                       <Card.Title
//                         className="justify-content-center"
//                         style={{ textAlign: "center" }}
//                       >
//                         {" "}
//                         <img src={logo} alt="logo" height="20%" width="20%" />
//                       </Card.Title>
//                       <Form>
//                         <FormGroup className="mb-3" controlId="formBasicEmail">
//                           <FormLabel>Username</FormLabel>
//                           <FormControl
//                             type="email"
//                             placeholder="Enter email"
//                           />
//                         </FormGroup>

//                         <FormGroup
//                           className="mb-3"
//                           controlId="formBasicPassword"
//                         >
//                           <FormLabel>Password</FormLabel>
//                           <FormControl
//                             type="password"
//                             placeholder="Password"
//                           />
//                         </FormGroup>

//                         <FormGroup
//                           className="mb-3"
//                           controlId="formBasicCheckbox"
//                         >
//                           <Form.Check type="checkbox" label="Remember me" />
//                         </FormGroup>

//                         <div className="d-grid gap-3 col-11 mx-auto">
//                           <Button variant="primary" type="submit">
//                             Sign In
//                           </Button>
//                           <a href="#">Forgot your password?</a>

//                           <p>
//                             You don't have an account ? <a href="#">SignUp</a>
//                           </p>
//                         </div>
//                       </Form>
//                     </CardBody>
//                   </Card>
//                 </div>
//               </div>
//             </div> */}

//           {currentStep === 1 && (<Card style={{ margin: '5%' }}>
//             <CardBody>
//               <Card.Title className="text-center"> <img src={logo} alt="logo" className="img-fluid" height={"20%"} width={"20%"} /></Card.Title>
//               <Form>
//                 <FormGroup className="mb-3" controlId="formBasicName">
//                   <FormLabel>Name</FormLabel>
//                   <FormControl type="text" placeholder="Enter your name" />
//                 </FormGroup>
//                 <FormGroup className="mb-3" controlId="formBasicSurname">
//                   <FormLabel>Surname</FormLabel>
//                   <FormControl type="text" placeholder="Enter your surname" />
//                 </FormGroup>
//                 <FormGroup className="mb-3" controlId="formBasicTel">
//                   <FormLabel>Telephone Number</FormLabel>
//                   <FormControl type="tel" placeholder="Enter your telephone number" />
//                 </FormGroup>
//                 <FormGroup className="mb-3" controlId="formBasicCIN">
//                   <FormLabel>National ID (CIN)</FormLabel>
//                   <FormControl type="text" placeholder="Enter your national ID (CIN)" />
//                 </FormGroup>
//                 <FormGroup className="mb-3" controlId="formBasicEmail">
//                   <FormLabel>Email address</FormLabel>
//                   <FormControl type="email" placeholder="Enter email" />
//                 </FormGroup>
//                 <FormGroup className="mb-3" controlId="formBasicPassword">
//                   <FormLabel>Password</FormLabel>
//                   <FormControl type="password" placeholder="Password" />
//                 </FormGroup>
//                 <FormGroup className="mb-3" controlId="formBasicCheckbox">
//                   <Form.Check type="checkbox" label="I agree to the terms and conditions" />
//                 </FormGroup>
//                 <Button variant="primary" onClick={handleSubmitStep1} type="submit">
//                   Sign Up
//                 </Button>
//               </Form>
//             </CardBody>
//           </Card>

//           )}

//           {currentStep === 2 && (
//             <Card style={{ margin: "5%" }}>
//               <CardBody>
//                 <Card.Title className="text-center">
//                   {" "}
//                   <img
//                     src={logo}
//                     alt="logo"
//                     className="img-fluid"
//                     height={"20%"}
//                     width={"20%"}
//                   />
//                 </Card.Title>
//                 <Form>
//                   <FormGroup className="mb-3" controlId="CarCount">
//                     <FormLabel>How many cars do you have?</FormLabel>
//                     <FormControl as="select" onChange={handleCarCountChange}>
//                     <option value="">Choose...</option>
//                       <option value={1}>1</option>
//                       <option value={2}>2</option>
//                       <option value={3}>3</option>
//                     </FormControl>
//                   </FormGroup>
//                   {renderCarFields()}
//                   <Button variant="primary" type="submit">
//                     Submit
//                   </Button>
//                 </Form>s
//               </CardBody>
//             </Card>
//           )}
//         </div>
//       </div>
//     </div>

//registerv1

// import { useState} from "react";
// import { Card, Form, Button, CardTitle, CardBody, FormGroup, FormLabel } from "react-bootstrap";
// import img1 from "./img/img1.jpg";
// import logo from "../home/img/logo.png";

// function Home() {
//     const [carCount, setCarCount] = useState(1);

//     // useEffect(() => {

//     //     if (carCount < 1) {
//     //         setCarCount(1);
//     //     }
//     // }, [carCount]);

//     const handleAddCar = () => {
//         setCarCount(carCount + 1);
//     };

//     const renderCarFields = () => {
//         const cars = [];
//         for (let i = 1; i <= carCount; i++) {
//             cars.push(
//                 <Card key={i} style={{ margin: '3%' }}>
//                     <CardTitle className="justify-content-center" style={{ textAlign: "center" }}>Car {i}</CardTitle>
//                     <CardBody>
//                         <fieldset>
//                             <legend>Car {i}</legend>
//                             <FormGroup className="mb-3" controlId={`matricule_${i}`}>
//                                 <FormLabel>Matricule</FormLabel>
//                                 <FormControl type="text" placeholder="Enter matricule" />
//                             </FormGroup>
//                             <FormGroup className="mb-3" controlId={`contract_number_${i}`}>
//                                 <FormLabel>Contract Number</FormLabel>
//                                 <FormControl type="text" placeholder="Enter contract number" />
//                             </FormGroup>
//                             <FormGroup className="mb-3" controlId={`insurance_type_${i}`}>
//                                 <FormLabel>Insurance Type</FormLabel>
//                                 <FormControl as="select">
//                                     <option>Choose...</option>
//                                     <option>Comprehensive</option>
//                                     <option>Third Party</option>
//                                     <option>all-risk</option>
//                                 </FormControl>
//                             </FormGroup>
//                         </fieldset>
//                     </CardBody>
//                 </Card>
//             );
//         }
//         return cars;
//     };

//     return (
//         <body style={{ backgroundImage: `url(${img1})`, backgroundSize: 'cover', backgroundAttachment: 'fixed', height: '100vh'}}>
//             <div className="row justify-content-center" >
//                 <div className="col-md-6 ">
//                     <Card style={{ margin: '10%' }}>
//                         <CardTitle className="justify-content-center" style={{ textAlign: "center" }}>
//                             <img src={logo} alt="LOGO" height="20%" width="20%" />
//                         </CardTitle>
//                         <CardBody>
//                             {renderCarFields()}
//                             <Button variant="primary" onClick={handleAddCar}>+ ADD</Button>
//                         </CardBody>
//                     </Card>
//                 </div>
//             </div>
//         </body>
//     );
// }

// export default Home;


import { useState } from "react";
import {
  Card,
  Form,
  Button,
  CardTitle,
  CardBody,
  FormControl,
  FormCheck,
  FormGroup,
  FormLabel,
} from "react-bootstrap";
import img2 from "./img/img2.jpg";
import logo from "../home/img/logo.png";

function Home()
    {
        const [signInData, setSignInData] = useState({
          username: "",
          password: "",
          rememberMe: false,
        });
      
        const handleInputChange = (e) => {
          const { name, value, type, checked } = e.target;
          const newValue = type === "checkbox" ? checked : value;
          setSignInData({ ...signInData, [name]: newValue });
        };
      
        const handleSubmit = (e) => {
          e.preventDefault();
          console.log(signInData); // Vous pouvez utiliser ces données pour l'authentification ou pour d'autres traitements
        };
      
        return (
          <div className="container-fluid" style={{ height: "100vh" }}>
            <div className="row" style={{ height: "100%" }}>
              <div className="col-md-6 ">
                <img src={img2} alt="img1" height="100%" width="100%" />
              </div>
      
              <div className="col-md-6 align-items-center justify-content-center">
                <Card style={{ margin: "10%" }}>
                  <CardBody>
                    <CardTitle
                      className="justify-content-center"
                      style={{ textAlign: "center" }}
                    >
                      {" "}
                      <img src={logo} alt="logo" height="20%" width="20%" />
                    </CardTitle>
                    <Form onSubmit={handleSubmit}>
                      <FormGroup className="mb-3" controlId="formBasicEmail">
                        <FormLabel>Username</FormLabel>
                        <FormControl
                          type="email"
                          name="username"
                          value={signInData.username}
                          onChange={handleInputChange}
                          placeholder="Enter email"
                        />
                      </FormGroup>
      
                      <FormGroup className="mb-3" controlId="formBasicPassword">
                        <FormLabel>Password</FormLabel>
                        <FormControl
                          type="password"
                          name="password"
                          value={signInData.password}
                          onChange={handleInputChange}
                          placeholder="Password"
                        />
                      </FormGroup>
      
                      <FormGroup className="mb-3" controlId="formBasicCheckbox">
                        <FormCheck
                          type="checkbox"
                          name="rememberMe"
                          checked={signInData.rememberMe}
                          onChange={handleInputChange}
                          label="Remember me"
                        />
                      </FormGroup>
      
                      <div className="d-grid gap-3 col-11 mx-auto">
                        <Button variant="primary" type="submit">
                          Sign In
                        </Button>
                        <a href="#">Forgot your password?</a>
      
                        <p>
                          You don't have an account ? <a href="#">SignUp</a>
                        </p>
                      </div>
                    </Form>
                  </CardBody>
                </Card>
              </div>
            </div>
          </div>
        );
      }
      

export default Home;