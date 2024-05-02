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

const SignIn = () => {
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
      <div className="row"style={{ height: "100%" }} >
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
};

export default SignIn;
