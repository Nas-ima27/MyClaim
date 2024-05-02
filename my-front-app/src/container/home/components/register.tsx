import  { useState } from "react";
import {
  Card,
  Form,
  Button,
  CardTitle,
  CardBody,
  FormControl,
  FormGroup,
  FormLabel,
} from "react-bootstrap";
import img1 from "./img/img1.jpg";
import logo from "../home/img/logo.png";

const SignUp = () =>  {
    const [currentStep, setCurrentStep] = useState(1);
    const [carCount, setCarCount] = useState(1);
    const [client, setClient] = useState({
      name: "",
      surname: "",
      tel: "",
      cin: "",
      email: "",
      password: "",
      termsAgreed: false,
      cars: [{ matricule: "", contractNumber: "", insuranceType: "" }],
  
    });
  
    const handleInputChange = (e) => {
      const { name, value, type, checked } = e.target;
      const newValue = type === "checkbox" ? checked : value;
      setClient({ ...client, [name]: newValue });
    };
    const handleCarInputChange = (e, i) => {
      const { name, value } = e.target;
      const updatedCars = [...client.cars];
      updatedCars[i][name] = value;
      setClient({ ...client, cars: updatedCars });
  };
  
  const handleAddCar = () => {
      setCarCount(carCount + 1);
      setClient({ ...client, cars: [...client.cars, { matricule: '', contractNumber: '', insuranceType: '' }] });
  };
  
    const handleSubmitStep1 = (e) => {
      e.preventDefault();
      setCurrentStep(2);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(client); // Vous pouvez utiliser l'objet client ici pour l'envoyer à un serveur ou pour effectuer d'autres traitements
    };
  
    const renderCarFields = () => {
      return client.cars.map((car, i) => (
        <Card key={i} style={{ margin: "3%" }}>
          <CardTitle
            className="justify-content-center"
            style={{ textAlign: "center" }}
          >
            Car {i + 1}
          </CardTitle>
          <CardBody>
            <fieldset>
              <legend>Car {i + 1}</legend>
              <FormGroup className="mb-3" controlId={`matricule_${i}`}>
                <FormLabel>Matricule</FormLabel>
                <FormControl
                  type="text"
                  name="matricule"
                  value={car.matricule}
                  onChange={(e) => handleCarInputChange(e, i)}
                  placeholder="Enter matricule"
                />
              </FormGroup>
              <FormGroup className="mb-3" controlId={`contract_number_${i}`}>
                <FormLabel>Contract Number</FormLabel>
                <FormControl
                  type="text"
                  name="contractNumber"
                  value={car.contractNumber}
                  onChange={(e) => handleCarInputChange(e, i)}
                  placeholder="Enter contract number"
                />
              </FormGroup>
              <FormGroup className="mb-3" controlId={`insurance_type_${i}`}>
                <FormLabel>Insurance Type</FormLabel>
                <FormControl
                  as="select"
                  name="insuranceType"
                  value={car.insuranceType}
                  onChange={(e) => handleCarInputChange(e, i)}
                >
                  <option value="">Choose...</option>
                  <option value="Comprehensive">Comprehensive</option>
                  <option value="Third Party">Third Party</option>
                  <option value="all-risk">all-risk</option>
                </FormControl>
              </FormGroup>
            </fieldset>
          </CardBody>
        </Card>
      ));
    };
    return (
      <div
        className="container-fluid d-flex align-items-center justify-content-center"
        style={{ height: "100vh" }}
      >
        <div className="row " style={{ height: "100%" }}>
          <div className="col-6 container-fluid">
            <img src={img1} alt="img1" height="100%" width="100%" />
          </div>
          <div className="col-md-6 d-flex align-items-center justify-content-center">
            {currentStep === 1 && (
              <Card style={{ margin: "5%" }}>
                <Card.Body>
                  <Card.Title className="text-center">
                    {" "}
                    <img
                      src={logo}
                      alt="logo"
                      className="img-fluid"
                      height={"20%"}
                      width={"20%"}
                    />
                  </Card.Title>
                  <Form onSubmit={handleSubmitStep1}>
                    <FormGroup className="mb-3" controlId="formBasicName">
                      <FormLabel>Name</FormLabel>
                      <FormControl
                        type="text"
                        name="name"
                        value={client.name}
                        onChange={handleInputChange}
                        placeholder="Enter your name"
                      />
                    </FormGroup>
                    <FormGroup className="mb-3" controlId="formBasicSurname">
                      <FormLabel>Surname</FormLabel>
                      <FormControl
                        type="text"
                        name="surname"
                        value={client.surname}
                        onChange={handleInputChange}
                        placeholder="Enter your surname"
                      />
                    </FormGroup>
                    <FormGroup className="mb-3" controlId="formBasicTel">
                      <FormLabel>Telephone Number</FormLabel>
                      <FormControl
                        type="tel"
                        name="tel"
                        value={client.tel}
                        onChange={handleInputChange}
                        placeholder="Enter your telephone number"
                      />
                    </FormGroup>
                    <FormGroup className="mb-3" controlId="formBasicCIN">
                      <FormLabel>National ID (CIN)</FormLabel>
                      <FormControl
                        type="text"
                        name="cin"
                        value={client.cin}
                        onChange={handleInputChange}
                        placeholder="Enter your national ID (CIN)"
                      />
                    </FormGroup>
                    <FormGroup className="mb-3" controlId="formBasicEmail">
                      <FormLabel>Email address</FormLabel>
                      <FormControl
                        type="email"
                        name="email"
                        value={client.email}
                        onChange={handleInputChange}
                        placeholder="Enter email"
                      />
                    </FormGroup>
                    <FormGroup className="mb-3" controlId="formBasicPassword">
                      <FormLabel>Password</FormLabel>
                      <FormControl
                        type="password"
                        name="password"
                        value={client.password}
                        onChange={handleInputChange}
                        placeholder="Password"
                      />
                    </FormGroup>
                    <FormGroup className="mb-3" controlId="formBasicCheckbox">
                      <Form.Check
                        type="checkbox"
                        name="termsAgreed"
                        checked={client.termsAgreed}
                        onChange={handleInputChange}
                        label="I agree to the terms and conditions"
                      />
                    </FormGroup>
                    <Button variant="primary" type="submit">
                      Sign Up
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            )}
            {currentStep === 2 && (
              <Card style={{ margin: "10%" }}>
                <CardTitle
                  className="justify-content-center"
                  style={{ textAlign: "center" }}
                >
                  <img src={logo} alt="LOGO" height="20%" width="20%" />
                </CardTitle>
                <CardBody>
                  {renderCarFields()}
                  <Button variant="primary" onClick={handleAddCar}>
                    + ADD
                  </Button>
                  <Button variant="primary" onClick={handleSubmit}>
                    Submit
                  </Button>
                </CardBody>
              </Card>
            )}
          </div>
        </div>
      </div>
    );
  }



export default SignUp;
