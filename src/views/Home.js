import { useEffect } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardText,
  CardLink,
  Row, Col
} from "reactstrap";

// ** Custom Components
import StatsHorizontal from '@components/widgets/stats/StatsHorizontal'
import '@styles/react/apps/app-users.scss'

// ** Icons Imports
import { User, UserPlus, UserCheck, UserX } from 'react-feather'

const Home = () => {
  useEffect(()=> {
    localStorage.setItem("accountType", "0")
  }, [])
  return (
    <div className='app-user-list'>
    <Row>
      <Col lg='3' sm='6'>
        <StatsHorizontal
          color='primary'
          statTitle='Total Users'
          icon={<User size={20} />}
          renderStats={<h3 className='fw-bolder mb-75'>21</h3>}
        />
      </Col>
      <Col lg='3' sm='6'>
        <StatsHorizontal
          color='success'
          statTitle='Fingerprint Verified Users'
          icon={<UserCheck size={20} />}
          renderStats={<h3 className='fw-bolder mb-75'>04</h3>}
        />
      </Col>
      <Col lg='3' sm='6'>
        <StatsHorizontal
          color='secondary'
          statTitle='Pending Fingerprint Users'
          icon={<UserX size={20} />}
          renderStats={<h3 className='fw-bolder mb-75'>07</h3>}
        />
      </Col>
      <Col lg='3' sm='6'>
        <StatsHorizontal
          color='warning'
          statTitle='Guarantor Users'
          icon={<UserPlus size={20} />}
          renderStats={<h3 className='fw-bolder mb-75'>23</h3>}
        />
      </Col>
    </Row>
  </div>
  );
};

export default Home;
