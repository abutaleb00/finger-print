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
          statTitle='eKYC  Verified Users'
          icon={<UserCheck size={20} />}
          renderStats={<h3 className='fw-bolder mb-75'>04</h3>}
        />
      </Col>
      <Col lg='3' sm='6'>
        <StatsHorizontal
          color='secondary'
          statTitle='Pending eKYC Users'
          icon={<UserX size={20} />}
          renderStats={<h3 className='fw-bolder mb-75'>07</h3>}
        />
      </Col>
      <Col lg='3' sm='6'>
        <StatsHorizontal
          color='warning'
          statTitle='Grantor Users'
          icon={<UserPlus size={20} />}
          renderStats={<h3 className='fw-bolder mb-75'>23</h3>}
        />
      </Col>
    </Row>
  </div>
  );
};

export default Home;
