// ** Reactstrap Imports
// ** React Imports
import { useState } from "react";
import {
  Row,
  Col,
  Badge,
  Card,
  CardHeader,
  CardTitle,
  CardBody
} from "reactstrap";
import { Link } from "react-router-dom";
import "flatpickr/dist/themes/airbnb.css";
// ** Third Party Components
import "cleave.js/dist/addons/cleave-phone.us";
// import MUIDataTable from "mui-datatables";
// ** Utils

// ** Styles
import "@styles/react/libs/react-select/_react-select.scss";


const VerifiedUserList = () => {

  // const columns = ["Name", "Father Name", "Date of Birth", "Mobile No", "Gender", "Profession", "Relation"];

  // const data = [
  //   ["Abdul Aziz", "Md. Samaz", "16-02-1995", "01926543252", "Male", "Business", "Friend"],
  //   ["Ataur rahman", "Md. Kasem Shikdar", "17-05-1993", "0192353556", "Make", "Service Holder", "Brother"]
  // ];

  // const options = {
  //   filterType: "checkbox",
  //   responsive: "standard",
  //   filter: false,
  //   download: false,
  //   print: false,
  //   selectableRows: "none",
  //   rowsPerPage: 100,
  //   rowsPerPageOptions: [10, 100, 200, 500, 1000],
  // };

  return (
    <Card>
      <CardHeader className="border-bottom">
        <CardTitle tag="h4">Grantors List</CardTitle>
      </CardHeader>
      <CardBody className="my-2 py-50">
      <Row>
        <Col md="12" className="mb-1" style={{textAlign:"right"}}>
        <Link to="/new-grantors" className="btn btn-primary">
        + Add New Grantor
        </Link>
      </Col>
      </Row>
        {/* <MUIDataTable
          title={"Grantors List"}
          data={data}
          columns={columns}
          options={options}
        /> */}
      </CardBody>
    </Card>
  );
};

export default VerifiedUserList;