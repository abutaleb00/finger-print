// ** Reactstrap Imports
import {
    Card,
    CardHeader,
    CardTitle,
    CardBody,
    Label,
    Input,
    Button,
    Row,
    Col,
  } from "reactstrap";
  import Select, { components } from "react-select"; // eslint-disable-line
  
  const GrantorEdit = () => {
    const genderOptions = [
      { value: "male", label: "Male" },
      { value: "female", label: "Female", color: "#0052CC", isFixed: true },
      { value: "third", label: "Third Person" },
    ];
    return (
      <Card>
        <CardHeader>
          <CardTitle tag="h4">Personal Information</CardTitle>
        </CardHeader>
  
        <CardBody>
          <Row>
            <Col className="mb-1" xl="4" md="6" sm="12">
              <Label className="form-label" for="basicInput">
                Customer ID
              </Label>
              <Input
                type="text"
                id="basicInput"
                placeholder="Enter"
                value="1238890654"
              />
            </Col>
            <Col className="mb-1" xl="4" md="6" sm="12">
              <Label className="form-label" for="basicInput">
                Applicant Name
              </Label>
              <Input
                type="text"
                id="basicInput"
                placeholder="Enter"
                value="Mohammad Amir"
              />
            </Col>
            <Col className="mb-1" xl="4" md="6" sm="12">
              <Label className="form-label" for="basicInput">
                Father Name
              </Label>
              <Input
                type="text"
                id="basicInput"
                placeholder="Enter"
                value="Addul Halim"
              />
            </Col>
            <Col className="mb-1" xl="4" md="6" sm="12">
              <Label className="form-label" for="basicInput">
                Mother Name
              </Label>
              <Input
                type="text"
                id="basicInput"
                placeholder="Enter"
                value="Halima Begham"
              />
            </Col>
            <Col className="mb-1" xl="4" md="6" sm="12">
              <Label className="form-label" for="basicInput">
                Spouse Name
              </Label>
              <Input
                type="text"
                id="basicInput"
                value="Meharima Jaham"
                placeholder="Enter Spouse Name"
              />
            </Col>
            <Col className="mb-1" xl="4" md="6" sm="12">
              <Label className="form-label" for="basicInput">
                Profession
              </Label>
              <Input type="text" id="basicInput" placeholder="Enter Profession" value="Service Holder" />
            </Col>
            <Col className="mb-1" xl="4" md="6" sm="12">
              <Label className="form-label" for="basicInput">
                Gender
              </Label>
              <Select
                isClearable={false}
                defaultValue={genderOptions[0]}
                name="colors"
                options={genderOptions}
                className="react-select"
                classNamePrefix="select"
              />
            </Col>
            <Col className="mb-1" xl="4" md="6" sm="12">
              <Label className="form-label" for="basicInput">
                Mobile Number
              </Label>
              <Input
                type="text"
                id="basicInput"
                placeholder="Enter Mobile Number"
                value="01928365476"
              />
            </Col>
            <Col className="mb-1" xl="4" md="6" sm="12">
              <Label className="form-label" for="basicInput">
                Email Address
              </Label>
              <Input
                type="text"
                id="basicInput"
                placeholder="Enter Email Address"
                value="amirahamad1@gmail.com"
              />
            </Col>
          </Row>
          <Row>
            <Col xl={12} style={{ textAlign: "center", marginTop: "20px" }}>
              <Button
                type="submit"
                color="success"
                onClick={() => setBasicModal(!basicModal)}
              >
                Update
              </Button>
            </Col>
          </Row>
        </CardBody>
      </Card>
    );
  };
  export default GrantorEdit;  