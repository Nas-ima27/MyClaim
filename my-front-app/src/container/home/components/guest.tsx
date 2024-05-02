import { useState} from "react";
import { Card, Form, Button, CardTitle, CardBody,FormControl, FormGroup, FormLabel } from "react-bootstrap";
import img1 from "./img/img1.jpg";
import logo from "../home/img/logo.png";

const GuestForm = () =>{

    const [formData, setFormData] = useState({
        name: '',
        cin: '',
        phone: '',
        email: '',
        demandType: '',
        complaintType: '',
        complaint: '',
        matricule: '',
        contractNumber: '',
        date: '',
        time: '',
        city: '',
        damageType: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        // Send form data to server or perform other actions here
    };

    return (
        <body style={{ backgroundImage: `url(${img1})`, backgroundSize: 'cover', backgroundAttachment: 'fixed',backgroundPosition: 'center'}}>
             <div className="row justify-content-center" >
                <div className="col-md-6 ">
             <Card>
            <legend><img src={logo} alt="logo" height="20%" width="20%"/></legend>
            <CardBody>
                <CardTitle>Guest Form</CardTitle>
                <Form onSubmit={handleSubmit}>
                    <FormGroup controlId="name">
                        <FormLabel>Name</FormLabel>
                        <FormControl type="text" name="name" value={formData.name} onChange={handleChange} />
                    </FormGroup>
                    <FormGroup controlId="cin">
                        <FormLabel>CIN</FormLabel>
                        <FormControl type="text" name="cin" value={formData.cin} onChange={handleChange} />
                    </FormGroup>
                    <FormGroup controlId="phone">
                        <FormLabel>Phone</FormLabel>
                        <FormControl type="text" name="phone" value={formData.phone} onChange={handleChange} />
                    </FormGroup>
                    <FormGroup controlId="email">
                        <FormLabel>Email</FormLabel>
                        <FormControl type="email" name="email" value={formData.email} onChange={handleChange} />
                    </FormGroup>
                    <FormGroup controlId="demandType">
                        <FormLabel>Demand Type</FormLabel>
                        <FormControl as="select" name="demandType" value={formData.demandType} onChange={handleChange}>
                            <option value="">Select...</option>
                            <option value="complaint">Complaint</option>
                            <option value="claim">Claim</option>
                        </FormControl>
                    </FormGroup>
                    {formData.demandType === 'complaint' && (
                        <>
                            <FormGroup controlId="complaintType">
                                <FormLabel>Complaint Type</FormLabel>
                                <FormControl type="text" name="complaintType" value={formData.complaintType} onChange={handleChange} />
                            </FormGroup>
                            <FormGroup controlId="complaint">
                                <FormLabel>Complaint</FormLabel>
                                <FormControl as="textarea" rows={3} name="complaint" value={formData.complaint} onChange={handleChange} />
                            </FormGroup>
                        </>
                    )}
                    {formData.demandType === 'claim' && (
                        <>
                            <FormGroup controlId="matricule">
                                <FormLabel>Matricule</FormLabel>
                                <FormControl type="text" name="matricule" value={formData.matricule} onChange={handleChange} />
                            </FormGroup>
                            <FormGroup controlId="contractNumber">
                                <FormLabel>Contract Number</FormLabel>
                                <FormControl type="text" name="contractNumber" value={formData.contractNumber} onChange={handleChange} />
                            </FormGroup>
                            <FormGroup controlId="date">
                                <FormLabel>Date</FormLabel>
                                <FormControl type="date" name="date" value={formData.date} onChange={handleChange} />
                            </FormGroup>
                            <FormGroup controlId="time">
                                <FormLabel>Time</FormLabel>
                                <FormControl type="time" name="time" value={formData.time} onChange={handleChange} />
                            </FormGroup>
                            <FormGroup controlId="city">
                                <FormLabel>City</FormLabel>
                                <FormControl type="text" name="city" value={formData.city} onChange={handleChange} />
                            </FormGroup>
                            <Form.Group controlId="damageType">
                        <Form.Label>Type of Damage</Form.Label>
                        <Form.Control as="select" name="damageType" value={formData.damageType} onChange={handleChange}>
                            <option value="">Select...</option>
                            <option value="material">Material Damage</option>
                            <option value="bodily">Bodily Injury</option>
                            <option value="material_bodily">Material and Bodily Damage</option>
                        </Form.Control>
                    </Form.Group>
                        </>
                    )}
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </CardBody>
        </Card>
        </div></div>
        </body>
       
    );
}

export default GuestForm;
