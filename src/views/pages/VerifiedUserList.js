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
import { Link } from "react-router-dom";
import "flatpickr/dist/themes/airbnb.css";
// ** Third Party Components
import "cleave.js/dist/addons/cleave-phone.us";
import GrantorList from "./GrantorList";
import GrantorEdit from "./GrantorEdit";
// ** Utils
// ** Icons Imports
import { MoreVertical, Edit, Trash } from 'react-feather'
// ** Styles
import "@styles/react/libs/react-select/_react-select.scss";
import image1 from '@src/assets/images/avator/1.png'
import image2 from '@src/assets/images/avator/2.png'
import image3 from '@src/assets/images/avator/3.png'
import image4 from '@src/assets/images/avator/4.png'

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
          <th>Photo</th>
          <th>Borrower Type</th>
          <th>Company Name</th>
          <th>Applicant Name</th>
          <th>Father Name</th>
          <th>NID Number</th>
          <th>Phone Number</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <img className='me-75' src={image1} alt='angular' height='20' width='20' />
          </td>
          <td><span className='align-middle fw-bold'>SS International</span></td>
          <td><span className='align-middle fw-bold'>Corporate</span></td>
          <td><span className='align-middle fw-bold'>Asma Khatun</span></td>
          <td>Ahamed Sharif</td>
          <td>9088768732423</td>
          <td>01927485676</td>
          <td>
            <Badge pill color='light-primary' className='me-1'>
              Active
            </Badge>
          </td>
          <td>
          <div style={{display:"inline-block", marginTop:"-15px"}}>
            <div style={{display:"inline-block"}}>
              <GrantorList />
            </div>
            <div style={{display:"inline-block", marginLeft:"-15px"}}>
              <Badge 
              onClick={() => {
                localStorage.setItem("accountType", "3")
                window.location.href = "/nid-verify";
                }}
               color={'success'} className="text-capitalize" style={{cursor:"pointer", marginRight:"5px"}} >
                <span >Add Guarantor</span>
              </Badge>
            </div>
            <div style={{display:"inline-block"}}>
              <Link to="/grantor-edit" >
              <Badge color={'warning'} className="text-capitalize" style={{cursor:"pointer"}} >
                <span >Edit</span>
              </Badge>
              </Link>
            </div>
          </div>
          </td>
        </tr>
        <tr>
          <td>
            <img className='me-75' src={image2} alt='angular' height='20' width='20' />
          </td>
          <td><span className='align-middle fw-bold'>Individual</span></td>
          <td><span className='align-middle fw-bold'>N/A</span></td>
          <td><span className='align-middle fw-bold'>Abdul Kalam</span></td>
          <td>Samsur Rahman</td>
          <td>8963453459</td>
          <td>0192792304</td>
          <td>
            <Badge pill color='light-primary' className='me-1'>
              Active
            </Badge>
          </td>
          <td>
          <div style={{display:"inline-block", marginTop:"-15px"}}>
            <div style={{display:"inline-block"}}>
              <GrantorList />
            </div>
            <div style={{display:"inline-block", marginLeft:"-15px"}}>
              <Badge 
              onClick={() => {
                localStorage.setItem("accountType", "3")
                window.location.href = "/nid-verify";
                }}
               color={'success'} className="text-capitalize" style={{cursor:"pointer", marginRight:"5px"}} >
                <span >Add Guarantor</span>
              </Badge>
            </div>
            <div style={{display:"inline-block"}}>
              <Link to="/grantor-edit" >
              <Badge color={'warning'} className="text-capitalize" style={{cursor:"pointer"}} >
                <span >Edit</span>
              </Badge>
              </Link>
            </div>
          </div>
          </td>
        </tr>
        <tr>
          <td>
            <img className='me-75' src={image3} alt='angular' height='20' width='20' />
          </td>
          <td><span className='align-middle fw-bold'>Corporate</span></td>
          <td><span className='align-middle fw-bold'>SS International</span></td>
          <td><span className='align-middle fw-bold'>Jamirul Islam</span></td>
          <td>Javed Iqbal</td>
          <td>9088768732423</td>
          <td>01723426478</td>
          <td>
            <Badge pill color='light-primary' className='me-1'>
              Active
            </Badge>
          </td>
          <td>
          <div style={{display:"inline-block", marginTop:"-15px"}}>
            <div style={{display:"inline-block"}}>
              <GrantorList />
            </div>
            <div style={{display:"inline-block", marginLeft:"-15px"}}>
              <Badge 
              onClick={() => {
                localStorage.setItem("accountType", "3")
                window.location.href = "/nid-verify";
                }}
               color={'success'} className="text-capitalize" style={{cursor:"pointer", marginRight:"5px"}} >
                <span >Add Guarantor</span>
              </Badge>
            </div>
            <div style={{display:"inline-block"}}>
              <Link to="/grantor-edit" >
              <Badge color={'warning'} className="text-capitalize" style={{cursor:"pointer"}} >
                <span >Edit</span>
              </Badge>
              </Link>
            </div>
          </div>
          </td>
        </tr>
        <tr>
          <td>
            <img className='me-75' src={image4} alt='angular' height='20' width='20' />
          </td>
          <td><span className='align-middle fw-bold'>Individual</span></td>
          <td><span className='align-middle fw-bold'>N/A</span></td>
          <td><span className='align-middle fw-bold'>Abdul Kalam</span></td>
          <td>Shariar Alam</td>
          <td>674956443354</td>
          <td>01627567676</td>
          <td>
            <Badge pill color='light-primary' className='me-1'>
              Active
            </Badge>
          </td>
          <td>
          <div style={{display:"inline-block", marginTop:"-15px"}}>
            <div style={{display:"inline-block"}}>
              <GrantorList />
            </div>
            <div style={{display:"inline-block", marginLeft:"-15px"}}>
              <Badge 
              onClick={() => {
                localStorage.setItem("accountType", "3")
                window.location.href = "/nid-verify";
                }}
               color={'success'} className="text-capitalize" style={{cursor:"pointer", marginRight:"5px"}} >
                <span >Add Guarantor</span>
              </Badge>
            </div>
            <div style={{display:"inline-block"}}>
              <Link to="/grantor-edit" >
              <Badge color={'warning'} className="text-capitalize" style={{cursor:"pointer"}} >
                <span >Edit</span>
              </Badge>
              </Link>
            </div>
          </div>
          </td>
        </tr>
      </tbody>
    </Table>
      </CardBody>
    </Card>
  );
};

export default VerifiedUserList;