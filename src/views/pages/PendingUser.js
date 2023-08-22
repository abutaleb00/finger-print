// ** Reactstrap Imports
// ** React Imports
import { useEffect } from "react";
import {
  Row,
  Col,
  Badge,
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Table,
  Button
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

const PendingUser = () => {
  useEffect(()=> {
    localStorage.setItem("accountType", "0")
  }, [])
  return (
    <Card>
      <CardHeader className="border-bottom">
        <CardTitle tag="h4">Pending Fingerprint verification List</CardTitle>
      </CardHeader>
      <CardBody className="my-2 py-50">
      <Table responsive>
      <thead>
        <tr>
          <th>Photo</th>
          <th>Borrower Type</th>
          <th>Company Name</th>
          <th>Name</th>
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
          <td><span className='align-middle fw-bold'>Corporate</span></td>
          <td><span className='align-middle fw-bold'>SS International</span></td>
          <td>Ahamed Sharif</td>
          <td>Md. Aziz Sharif</td>
          <td>9088768732423</td>
          <td>01927485676</td>
          <td>
            <Badge pill color='light-warning' className='me-1'>
              Pending
            </Badge>
          </td>
          <td>
          <div style={{display:"inline-block", marginRight:"10px"}}>
              <Badge color={'success'} className="text-capitalize" style={{cursor:"pointer"}} >
                <span >Approved</span>
              </Badge>
          </div>
          <div style={{display:"inline-block"}}>
              <Badge color={'danger'} className="text-capitalize" style={{cursor:"pointer"}} >
                <span >Reject</span>
              </Badge>
          </div>
          </td>
        </tr>
        <tr>
          <td>
            <img className='me-75' src={image2} alt='angular' height='20' width='20' />
          </td>
          <td><span className='align-middle fw-bold'>Individual</span></td>
          <td><span className='align-middle fw-bold'>N/A</span></td>
          <td>Samsur Rahman</td>
          <td>Abdul Kasem</td>
          <td>8963453459</td>
          <td>0192792304</td>
          <td>
          <Badge pill color='light-warning' className='me-1'>
              Pending
            </Badge>
          </td>
          <td>
          <div style={{display:"inline-block", marginRight:"10px"}}>
              <Badge color={'success'} className="text-capitalize" style={{cursor:"pointer"}} >
                <span >Approved</span>
              </Badge>
          </div>
          <div style={{display:"inline-block"}}>
              <Badge color={'danger'} className="text-capitalize" style={{cursor:"pointer"}} >
                <span >Reject</span>
              </Badge>
          </div>
          </td>
        </tr>
        <tr>
          <td>
            <img className='me-75' src={image3} alt='angular' height='20' width='20' />
          </td>
          <td><span className='align-middle fw-bold'>Corporate</span></td>
          <td><span className='align-middle fw-bold'>SS International</span></td>
          <td>Javed Iqbal</td>
          <td>Azim Iqbal</td>
          <td>9088768732423</td>
          <td>01723426478</td>
          <td>
          <Badge pill color='light-warning' className='me-1'>
              Pending
            </Badge>
          </td>
          <td>
          <div style={{display:"inline-block", marginRight:"10px"}}>
              <Badge color={'success'} className="text-capitalize" style={{cursor:"pointer"}} >
                <span >Approved</span>
              </Badge>
          </div>
          <div style={{display:"inline-block"}}>
              <Badge color={'danger'} className="text-capitalize" style={{cursor:"pointer"}} >
                <span >Reject</span>
              </Badge>
          </div>
          </td>
        </tr>
      </tbody>
    </Table>
      </CardBody>
    </Card>
  );
};

export default PendingUser;