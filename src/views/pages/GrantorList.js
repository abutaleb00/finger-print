// ** React Imports
import { useState } from "react";
import { Link } from "react-router-dom";
// ** Reactstrap Imports
import {
  Badge,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Table,
  Button 
} from "reactstrap";
import finger from "@src/assets/images/pages/fingerprint.svg";
import fingerapp from "@src/assets/images/pages/fingerprint-app.png";
import { Users, Edit, Trash } from 'react-feather'
import image1 from '@src/assets/images/avator/1.png'
import image2 from '@src/assets/images/avator/2.png'
import image3 from '@src/assets/images/avator/3.png'
import image4 from '@src/assets/images/avator/4.png'
import { Tooltip as ReactTooltip } from "react-tooltip";

const GrantorList = () => {
  const source = finger;
  const sourceapp = fingerapp;
  // ** States
  const [basicModal, setBasicModal] = useState(false);

  return (
    <div className="demo-inline-spacing">
      <div className="basic-modal">
      <Badge  data-tooltip-id={`my-tooltip`} color={'primary'} className="text-capitalize" style={{cursor:"pointer"}} >
        <span onClick={() => setBasicModal(!basicModal)}><Users /></span>
      </Badge>
        <ReactTooltip
          id={`my-tooltip`}
          place="bottom"
          content="Guarantor List"
              />
        {/* <Button color='primary' outline onClick={() => setBasicModal(!basicModal)}>
          Basic Modal
        </Button> */}
        <Modal
          className="modal-fullscreen"
          isOpen={basicModal}
          toggle={() => setBasicModal(!basicModal)}
        >
          <ModalHeader toggle={() => setBasicModal(!basicModal)}>
          Guarantor List
          </ModalHeader>
          <ModalBody>
          <Table responsive>
      <thead>
        <tr>
          <th>Photo</th>
          <th>Name</th>
          <th>Father Name</th>
          <th>NID Number</th>
          <th>Phone Number</th>
          <th>Relation</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <img className='me-75' src={image2} alt='angular' height='20' width='20' />
          </td>
          <td><span className='align-middle fw-bold'>Abdul Kalam</span></td>
          <td>আহমেদ শরীফ</td>
          <td>9088768732423</td>
          <td>01927485676</td>
          <td>Brother</td>
          <td>
            <Badge pill color='light-primary' className='me-1'>
              Active
            </Badge>
          </td>
          <td>
              <Link to="/grantor-edit" >
              <Badge color={'primary'} className="text-capitalize" style={{cursor:"pointer"}} >
                <span >Edit</span>
              </Badge>
              </Link>
          </td>
        </tr>
        <tr>
          <td>
            <img className='me-75' src={image1} alt='angular' height='20' width='20' />
          </td>
          <td><span className='align-middle fw-bold'>Nadia Hassan</span></td>
          <td>কাসের হোসেন</td>
          <td>8963453459</td>
          <td>0192792304</td>
          <td>Friend</td>
          <td>
            <Badge pill color='light-primary' className='me-1'>
              Active
            </Badge>
          </td>
          <td>
            <Link to="/grantor-edit" >
              <Badge color={'primary'} className="text-capitalize" style={{cursor:"pointer"}} >
                <span >Edit</span>
              </Badge>
              </Link>
          </td>
        </tr>
        <tr>
          <td>
            <img className='me-75' src={image3} alt='angular' height='20' width='20' />
          </td>
          <td><span className='align-middle fw-bold'>Amirul Islam</span></td>
          <td>জাবেদ ইকবাল</td>
          <td>9088768732423</td>
          <td>01723426478</td>
          <td>Wife</td>
          <td>
            <Badge pill color='light-primary' className='me-1'>
              Active
            </Badge>
          </td>
          <td>
            <Link to="/grantor-edit" >
              <Badge color={'primary'} className="text-capitalize" style={{cursor:"pointer"}} >
                <span >Edit</span>
              </Badge>
              </Link>
          </td>
        </tr>
      </tbody>
    </Table>
          </ModalBody>
          <ModalFooter>
            <Button color='danger' onClick={() => setBasicModal(!basicModal)}>
                Close
              </Button>
          </ModalFooter>
        </Modal>
      </div>
    </div>
  );
};
export default GrantorList;