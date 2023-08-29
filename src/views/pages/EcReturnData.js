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
import React, { useEffect } from 'react';
import Select, { components } from "react-select"; // eslint-disable-line
import Flatpickr from "react-flatpickr";
import { useState } from "react";
import data from "../components/ec.json"

const EcReturnData = (props) => {
  const [picker, setPicker] = useState(new Date());
  const [state, setSate] = useState(data)
  const [index, setIndex] = useState([1])
  const [permanentAddress, setPermanentAddress] = useState(data[index].permanentAddress)
  const [presentAddress, setPresentAddress] = useState(data[index].presentAddress)
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
             NID Number
            </Label>
            <Input
              type="text"
              id="basicInput"
              placeholder="Enter NID Number"
              value={state[index].nationalId}
              disabled
            />
          </Col>
          <Col className="mb-1" xl="4" md="6" sm="12">
            <Label className="form-label" for="basicInput">
              Full Name Bangla
            </Label>
            <Input
              type="text"
              id="basicInput"
              placeholder="Enter"
              value={state[index].name}
              disabled
            />
          </Col>
          <Col className="mb-1" xl="4" md="6" sm="12">
            <Label className="form-label" for="basicInput">
              Full Name English
            </Label>
            <Input
              type="text"
              id="basicInput"
              placeholder="Enter"
              value={state[index].nameEn}
              disabled
            />
          </Col>
          <Col className="mb-1" xl="4" md="6" sm="12">
            <Label className="form-label" for="basicInput">
             Date of Birth
            </Label>
            <Input
              type="text"
              id="basicInput"
              placeholder="Enter"
              value={state[index].dateOfBirth}
              disabled
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
              value={state[index].father}
              disabled
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
              value={state[index].mother}
              disabled
            />
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
              onChange={(e) => setSate({...state, gender: e.value})}
              isDisabled={true}
            />
          </Col>
          <Col className="mb-1" xl="4" md="6" sm="12">
            <Label className="form-label" for="basicInput">
              Spouse Name
            </Label>
            <Input
              type="text"
              id="basicInput"
              placeholder="Enter Spouse Name"
              onChange={(e) => setSate({...state, spouse: e.target.value})}
            />
          </Col>
          <Col className="mb-1" xl="4" md="6" sm="12">
            <Label className="form-label" for="basicInput">
              Profession
            </Label>
            <Input 
              type="text" 
              id="basicInput" 
              placeholder="Enter Profession" 
              onChange={(e) => setSate({...state, occupation: e.target.value})} />
          </Col>
          <Col className="mb-1" xl="4" md="6" sm="12">
            <Label className="form-label" for="basicInput">
              Designation
            </Label>
            <Input
              type="text"
              id="basicInput"
              placeholder="Enter Designation"
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
            />
          </Col>
          <Col className="mb-1" xl="12" md="12" sm="12">
            <p style={{fontWeight:"bold", marginBottom:"2px", marginTop:"10px"}}>
              Present Address
            </p>
          </Col>
          <Col className="mb-1" xl="4" md="4" sm="12">
            <Label className="form-label" for="basicInput">
             Division
            </Label>
            <Input
              type="text"
              id="basicInput"
              placeholder="Enter Division"
              value={presentAddress.division}
              onChange={(e) => setPresentAddress({...state, division: e.target.value})}
            />
          </Col>
          <Col className="mb-1" xl="4" md="4" sm="12">
            <Label className="form-label" for="basicInput">
             District
            </Label>
            <Input
              type="text"
              id="basicInput"
              placeholder="Enter District"
              value={presentAddress.district}
              onChange={(e) => setPresentAddress({...state, district: e.target.value})}
            />
          </Col>
          <Col className="mb-1" xl="4" md="4" sm="12">
            <Label className="form-label" for="basicInput">
             Upozila
            </Label>
            <Input
              type="text"
              id="basicInput"
              placeholder="Enter Upozila"
              value={presentAddress.upozila}
              onChange={(e) => setPresentAddress({...state, upozila: e.target.value})}
            />
          </Col>
          <Col className="mb-1" xl="4" md="4" sm="12">
            <Label className="form-label" for="basicInput">
            City/Municipality
            </Label>
            <Input
              type="text"
              id="basicInput"
              placeholder="Enter City/Municipality"
              value={presentAddress.cityCorporationOrMunicipality}
              onChange={(e) => setPresentAddress({...state, cityCorporationOrMunicipality: e.target.value})}
            />
          </Col>
          <Col className="mb-1" xl="4" md="4" sm="12">
            <Label className="form-label" for="basicInput">
            Union/Ward
            </Label>
            <Input
              type="text"
              id="basicInput"
              placeholder="Enter Union/Ward"
              value={presentAddress.unionOrWard}
              onChange={(e) => setPresentAddress({...state, unionOrWard: e.target.value})}
            />
          </Col>
          <Col className="mb-1" xl="4" md="4" sm="12">
            <Label className="form-label" for="basicInput">
            Post Office
            </Label>
            <Input
              type="text"
              id="basicInput"
              placeholder="Enter Union/Ward"
              value={presentAddress.postOffice}
              onChange={(e) => setPresentAddress({...state, postalCode: e.target.value})}
            />
          </Col>
          <Col className="mb-1" xl="4" md="4" sm="12">
            <Label className="form-label" for="basicInput">
             Postal Code
            </Label>
            <Input
              type="text"
              id="basicInput"
              placeholder="Enter Postal Code"
              value={presentAddress.postalCode}
              onChange={(e) => setPresentAddress({...state, postalCode: e.target.value})}
            />
          </Col>
          <Col className="mb-1" xl="4" md="4" sm="12">
            <Label className="form-label" for="basicInput">
            Mouza/Moholla
            </Label>
            <Input
              type="text"
              id="basicInput"
              placeholder="Enter Mouza/Moholla"
              value={presentAddress.additionalMouzaOrMoholla}
              onChange={(e) => setPresentAddress({...state, additionalMouzaOrMoholla: e.target.value})}
            />
          </Col>
          <Col className="mb-1" xl="4" md="4" sm="12">
            <Label className="form-label" for="basicInput">
            Village/Road
            </Label>
            <Input
              type="text"
              id="basicInput"
              placeholder="Enter Mouza/Moholla"
              value={presentAddress.additionalVillageOrRoad}
              onChange={(e) => setPresentAddress({...state, additionalVillageOrRoad: e.target.value})}
            />
          </Col>
          <Col className="mb-1" xl="4" md="4" sm="12">
            <Label className="form-label" for="basicInput">
            House/Holding No
            </Label>
            <Input
              type="text"
              id="basicInput"
              placeholder="Enter Mouza/Moholla"
              value={presentAddress.homeOrHoldingNo}
              onChange={(e) => setPresentAddress({...state, homeOrHoldingNo: e.target.value})}
            />
          </Col>
          <Col className="mb-1" xl="12" md="12" sm="12">
            <p style={{fontWeight:"bold", marginBottom:"2px", marginTop:"10px"}}>
            Permanent Address
            </p>
          </Col>
          <Col className="mb-1" xl="4" md="4" sm="12">
            <Label className="form-label" for="basicInput">
             Division
            </Label>
            <Input
              type="text"
              id="basicInput"
              placeholder="Enter Division"
              value={permanentAddress.division}
              onChange={(e) => setPermanentAddress({...state, division: e.target.value})}
            />
          </Col>
          <Col className="mb-1" xl="4" md="4" sm="12">
            <Label className="form-label" for="basicInput">
             District
            </Label>
            <Input
              type="text"
              id="basicInput"
              placeholder="Enter District"
              value={permanentAddress.district}
              onChange={(e) => setPermanentAddress({...state, district: e.target.value})}
            />
          </Col>
          <Col className="mb-1" xl="4" md="4" sm="12">
            <Label className="form-label" for="basicInput">
             Upozila
            </Label>
            <Input
              type="text"
              id="basicInput"
              placeholder="Enter Upozila"
              value={permanentAddress.upozila}
              onChange={(e) => setPermanentAddress({...state, upozila: e.target.value})}
            />
          </Col>
          <Col className="mb-1" xl="4" md="4" sm="12">
            <Label className="form-label" for="basicInput">
            City/Municipality
            </Label>
            <Input
              type="text"
              id="basicInput"
              placeholder="Enter City/Municipality"
              value={permanentAddress.cityCorporationOrMunicipality}
              onChange={(e) => setPermanentAddress({...state, cityCorporationOrMunicipality: e.target.value})}
            />
          </Col>
          <Col className="mb-1" xl="4" md="4" sm="12">
            <Label className="form-label" for="basicInput">
            Union/Ward
            </Label>
            <Input
              type="text"
              id="basicInput"
              placeholder="Enter Union/Ward"
              value={permanentAddress.unionOrWard}
              onChange={(e) => setPermanentAddress({...state, unionOrWard: e.target.value})}
            />
          </Col>
          <Col className="mb-1" xl="4" md="4" sm="12">
            <Label className="form-label" for="basicInput">
            Post Office
            </Label>
            <Input
              type="text"
              id="basicInput"
              placeholder="Enter Union/Ward"
              value={permanentAddress.postOffice}
              onChange={(e) => setPermanentAddress({...state, postalCode: e.target.value})}
            />
          </Col>
          <Col className="mb-1" xl="4" md="4" sm="12">
            <Label className="form-label" for="basicInput">
             Postal Code
            </Label>
            <Input
              type="text"
              id="basicInput"
              placeholder="Enter Postal Code"
              value={presentAddress.postalCode}
              onChange={(e) => setPresentAddress({...state, postalCode: e.target.value})}
            />
          </Col>
          <Col className="mb-1" xl="4" md="4" sm="12">
            <Label className="form-label" for="basicInput">
            Mouza/Moholla
            </Label>
            <Input
              type="text"
              id="basicInput"
              placeholder="Enter Mouza/Moholla"
              value={permanentAddress.additionalMouzaOrMoholla}
              onChange={(e) => setPermanentAddress({...state, additionalMouzaOrMoholla: e.target.value})}
            />
          </Col>
          <Col className="mb-1" xl="4" md="4" sm="12">
            <Label className="form-label" for="basicInput">
            Village/Road
            </Label>
            <Input
              type="text"
              id="basicInput"
              placeholder="Enter Mouza/Moholla"
              value={permanentAddress.additionalVillageOrRoad}
              onChange={(e) => setPermanentAddress({...state, additionalVillageOrRoad: e.target.value})}
            />
          </Col>
          <Col className="mb-1" xl="4" md="4" sm="12">
            <Label className="form-label" for="basicInput">
            House/Holding No
            </Label>
            <Input
              type="text"
              id="basicInput"
              placeholder="Enter Mouza/Moholla"
              value={permanentAddress.homeOrHoldingNo}
              onChange={(e) => setPermanentAddress({...state, homeOrHoldingNo: e.target.value})}
            />
          </Col>
        </Row>
        <Row>
          <Col xl={12} style={{ textAlign: "center", marginTop: "20px" }}>
            <Button
              type="submit"
              color="primary"
              onClick={() => {
                localStorage.setItem("accountType", "5")
                window.location.href = "/nid-verify";
              }}
            >
              Submit
            </Button>
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
};
export default EcReturnData;
