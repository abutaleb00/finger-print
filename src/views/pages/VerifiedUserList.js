// ** Reactstrap Imports
// ** React Imports
import { useState, useEffect } from "react";
import {
  Row,
  Col,
  Badge,
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Table
} from "reactstrap";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { Link } from "react-router-dom";
import "flatpickr/dist/themes/airbnb.css";
// ** Third Party Components
import "cleave.js/dist/addons/cleave-phone.us";
import GrantorList from "./GrantorList";
import GrantorEdit from "./GrantorEdit";
// ** Utils
// ** Icons Imports
import { User, Edit, BarChart } from 'react-feather'
// ** Styles
import "@styles/react/libs/react-select/_react-select.scss";
import data from "../components/ec.json"

const VerifiedUserList = () => {
  useEffect(()=> {
    localStorage.setItem("accountType", "0")
  }, [])
  return (
    <Card>
      <CardHeader className="border-bottom">
        <CardTitle tag="h4">Verified User List</CardTitle>
      </CardHeader>
      <CardBody className="my-2 py-50">
      {/* <Row>
        <Col md="12" className="mb-1" style={{textAlign:"right"}}>
        <Link to="/new-grantors" className="btn btn-primary">
        + Add New Grantor
        </Link>
      </Col>
      </Row> */}
      <Table responsive>
      <thead>
        <tr>
          <th>Applicant Name</th>
          <th>Father Name</th>
          <th>Mother Name</th>
          <th>NID Number</th>
          <th>Date of Birth</th>
          <th>Occupation</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
      {
          data.map((v, i) =>{
            return(
              <tr key={i}>
              <td>{v?.nameEn}</td>
              <td>{v?.father}</td>
              <td>{v?.mother}</td>
              <td>{v?.nationalId}</td>
              <td>{v?.dateOfBirth}</td>
              <td>{v?.occupation}</td>
              <td>
            <Badge pill color='light-primary' className='me-1'>
              Active
            </Badge>
          </td>
          <td>
          <div style={{display:"inline-block", marginTop:"-15px"}}>
            {/* <div style={{display:"inline-block"}}>
              <GrantorList />
            </div>
            <div style={{display:"inline-block", marginLeft:"-15px"}}>
              <Badge 
              data-tooltip-id={`my-tooltip0-${i}`}
              onClick={() => {
                localStorage.setItem("accountType", "3")
                window.location.href = "/nid-verify";
                }}
               color={'success'} className="text-capitalize" style={{cursor:"pointer", marginRight:"5px"}} >
                <span >+ <User /></span>
              </Badge>
              <ReactTooltip
                id={`my-tooltip0-${i}`}
                place="bottom"
                content="Add Guarantor"
              />
            </div>
            <div style={{display:"inline-block", marginRight:"5px"}}>
              <Link to="/grantor-edit"
              data-tooltip-id={`my-tooltip1-${i}`}>
              <Badge color={'warning'} className="text-capitalize" style={{cursor:"pointer"}} >
                <span ><Edit /></span>
              </Badge>
              </Link>
              <ReactTooltip
                id={`my-tooltip1-${i}`}
                place="bottom"
                content="Edit"
              />
            </div> */}
            <div style={{display:"inline-block"}}>
              <Link 
              data-tooltip-id={`my-tooltip-${i}`}
              style={{ backgroundColor: "#999" }} 
              id="my-tooltip"
              to={`/application-form`}
              //  state={{ userinfo: data[0] }}
              state={{ testvalue: "hello" }}
                >
              <Badge color={'info'} className="text-capitalize" style={{cursor:"pointer"}} >
                <span ><BarChart /></span>
              </Badge>
              </Link>
              <ReactTooltip
                id={`my-tooltip-${i}`}
                place="bottom"
                content="Application Form"
              />
            </div>
          </div>
          </td>
              </tr>
            )
          })
        }
      </tbody>
    </Table>
      </CardBody>
    </Card>
  );
};

export default VerifiedUserList;