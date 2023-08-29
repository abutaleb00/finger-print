import React, { Component } from 'react'
import {
    Row,
    Col,
    Form,
    Input,
    Label,
    Button,
    Badge,
    Card,
    CardHeader,
    CardTitle,
    CardBody,
    FormFeedback,
  } from "reactstrap";
  import { Link } from 'react-router-dom'
import "flatpickr/dist/themes/airbnb.css";
  // ** Third Party Components
import "cleave.js/dist/addons/cleave-phone.us";
import { useForm, Controller } from "react-hook-form";
import Flatpickr from "react-flatpickr";
import Select from "react-select"; 
import FingerPrintModal from "./FingerPrintModal";
import CompanyProfile from "./CompanyProfile";
import CompanyProfileProcess from "./CompanyProfileProcess";
import GuarantorsProfile from "./GuarantorsProfile";
import finger from "@src/assets/images/pages/fingerprint.svg";
  
// ** Styles
import "@styles/react/libs/react-select/_react-select.scss";
export default class NidVerify2 extends Component {
    constructor(props) {
        super(props);
        window.fingerComponent = this;
        //let nidPics = this.props.history.location.state.nidPics;
        this.state = {
        //   ...props.location.state,
          accountType: localStorage.getItem("accountType") !== undefined ? localStorage.getItem("accountType") : "0",
          dob: "1989-10-04",
          nid: "5975092452",
          colorButton: "red",
          loaderShow: false,
        };
      }
      receiveFingerData = (data) => {
        console.log(data);
        this.setState({ ...data });
      };    
  render() {
    console.log("color", this.state)
    const accountOption = [
        { value: "0", label: "Select Borrower" },
        { value: "1", label: "Individual" },
        { value: "2", label: "Corporate" },
      ];
    return (
        <Card>
        <CardHeader className="border-bottom">
          <CardTitle tag="h4">Fingerprint Verification</CardTitle>
        </CardHeader>
        <CardBody className="my-2 py-50">
          {this.state.accountType === "3" || this.state.accountType === "4" || this.state.accountType === "5" ? "" :
          <Row style={{marginBottom:"10px"}}>
          <Col
            sm={{
              offset: 4,
              order: 2,
              size: 4,
            }}
              >
              <Label className="form-label" for="basicInput">
              Borrower Type
              </Label>
              <Select
                isClearable={false}
                defaultValue={accountOption[0]}
                name="accountOption"
                options={accountOption}
                className="react-select"
                classNamePrefix="select"
                onChange={(e) => {
                  this.setState({accountType: e.value})
                  localStorage.setItem("accountType", e.value)
                }}
              />
            </Col>
          </Row>
          }
           {this.state.accountType === "3" || this.state.accountType ==="4" || this.state.accountType ==="5" ? <CompanyProfileProcess /> : ""}
           {this.state.accountType === "5" &&  <GuarantorsProfile />}
          {this.state.accountType === "1" || this.state.accountType === "4" ?
          <Form>
            <hr />
            <Row>
            <Col md="8" className="mb-1">
              <Col md="12" className="mb-1">
                <Label className="form-label" for="companyName">
                  NID Number
                </Label>
                <Input
                    placeholder="Enter NID Number"
                    onChange={(e) => this.setState({nid: e.target.value})}
                />
              </Col>
              <Col md="12" className="mb-1">
                <Label className="form-label" for="country">
                  Date of Birth
                </Label>
                <Flatpickr
                  className="form-control"
                  value={this.state.dob}
                  onChange={(date) => this.setState({dob: date})}
                  id="default-picker"
                />
              </Col>
              </Col>
              <Col
                sm={{
                  offset: 1,
                  order: 2,
                  size: 2,
                }}
                style={{ textAlign: "center", marginTop: "15px" }}
              >
                <Button
                    type="reset"
                    // color="warning"
                    color={
                        this.state.colorButton === "red"
                        ? "warning"
                        : "success"
                    }
                    outline
                    onClick={() => {
                        return window.captureFinger(
                          this,
                          "hfFingerData",
                          this.state
                        )
                      }}
                    >
                    <img
                        className="icon-only"
                        width={80}
                        src={finger}
                        alt="Fingerprint"
                    />
                </Button>
              </Col>
              <Col
                sm={{
                  offset: 4,
                  order: 2,
                  size: 3,
                }}
                style={{ textAlign: "center", marginTop: "15px" }}
              >
                <Badge color='primary' style={{padding:"12px 25px"}}>
                    <Link
                        to='/ec-data'
                        >
                        Submit
                    </Link>
                </Badge>
              </Col>
            </Row>
            {/* <Row>
              <Col
                sm={{
                  offset: 6,
                  order: 2,
                  size: 2,
                }}
                style={{ textAlign: "center", marginTop: "20px" }}
              >
                <FingerPrintModal />
              </Col>
            </Row> */}
          </Form>
          : ""
          }
          {this.state.accountType === "2" &&  <CompanyProfile />}
        </CardBody>
      </Card>
    )
  }
}
