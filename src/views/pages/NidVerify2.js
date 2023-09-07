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
  } from "reactstrap";
  import { Link } from 'react-router-dom'
import "flatpickr/dist/themes/airbnb.css";
  // ** Third Party Components
import "cleave.js/dist/addons/cleave-phone.us";
import Flatpickr from "react-flatpickr";
import Select from "react-select"; 
import CompanyProfile from "./CompanyProfile";
import CompanyProfileProcess from "./CompanyProfileProcess";
import GuarantorsProfile from "./GuarantorsProfile";
import finger from "@src/assets/images/pages/fingerprint.svg";
import data from "../components/ec.json"
import Swal from 'sweetalert2'
  
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
          dob: new Date(),
          nid: "",
          colorButton: "red",
          loaderShow: false,
          swalProps: {},
          ecresult: []
        };
      }
     
    successAlert = () => {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'No fingerprint match found',
          })
    }
    dataAlert = () => {
      let timerInterval
      Swal.fire({
        title: 'Data Processing!',
        html: 'Fingerprint data matching......',
        timer: 3000,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading()
          timerInterval = setInterval(() => {
            b.textContent = Swal.getTimerLeft()
          }, 100)
        },
        willClose: () => {
          clearInterval(timerInterval)
        }
      }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
          document.getElementById("button1").click();
        }
      })
    }
    receiveFingerData = (data) => {
      console.log(data);
     if( data?.extraData?.colorButton === "green"){
      this.dataAlert()
     }
      this.setState({ ...data });
    };
    errorAlert = () => {
        Swal.fire({
            icon: 'error',
            text: 'Please input NID & Date of Birth',
          })
    }
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
                    value={this.state.nid}
                    onChange={(e) => this.setState({nid: e.target.value})}
                />
              </Col>
              <Col md="12" className="mb-1">
                <Label className="form-label" for="country">
                  Date of Birth
                </Label>
                <Flatpickr
                  className="form-control"
                  defaultValue={this.state.dob}
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
                    color="warning"
                    // color={
                    //     this.state.colorButton === "red"
                    //     ? "warning"
                    //     : "success"
                    // }
                    outline
                    onClick={() => {
                      if(this.state.nid !== ''){
                        return window.captureFinger(
                          this,
                          "hfFingerData",
                          this.state
                        )
                      } else {
                        this.errorAlert()
                      }
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
                    <Button
                    style={{display:"none"}}
                     id='button1'
                     color='primary'
                     onClick={(e) => {
                        const ecresult = data.filter((obj) => obj.nationalId === this.state.nid);
                       if(ecresult?.length > 0){
                        this.setState({ecresult: ecresult}, ()=>{
                          document.getElementById("button2").click();
                        })
                       } else {
                        this.successAlert()
                       }
                    }}
                    disabled={this.state.nid === ''}
                        >
                        Submit
                    </Button>
                    <Link
                    id='button2'
                    style={{display:"none"}}
                      to={`/ec-data`}
                      state={{ userinfo: this.state.ecresult }}
                  >
                      redirect
                  </Link>
              </Col>
            </Row>
          </Form>
          : ""
          }
          {this.state.accountType === "2" &&  <CompanyProfile />}
        </CardBody>
      </Card>
    )
  }
}
