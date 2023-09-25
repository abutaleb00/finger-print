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
import { Tooltip as ReactTooltip } from "react-tooltip";
import { User, Edit, BarChart } from 'react-feather'
import { Link } from "react-router-dom";
import "flatpickr/dist/themes/airbnb.css";
// ** Third Party Components
import "cleave.js/dist/addons/cleave-phone.us";
import GrantorList from "./GrantorList";
import GrantorEdit from "./GrantorEdit";
// ** Utils
// ** Icons Imports

// ** Styles
import "@styles/react/libs/react-select/_react-select.scss";
import image1 from '@src/assets/images/avator/1.png'
import image2 from '@src/assets/images/avator/2.png'
import image3 from '@src/assets/images/avator/3.png'
import image4 from '@src/assets/images/avator/4.png'
import data from "../components/ec.json"

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
          <th>Name</th>
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
                <Badge pill color='light-warning' className='me-1'>
                  Pending
                </Badge>
              </td>
              <td>
              <div style={{display:"inline-block"}}>
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
            </div>
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
            )
          })
        }
        {/* <tr>
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
        </tr> */}
      </tbody>
    </Table>
      </CardBody>
    </Card>
  );
};

export default PendingUser;