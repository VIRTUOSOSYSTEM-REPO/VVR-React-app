
import React from "react";
import './profile.css'
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  Row,
  Col,
} from "reactstrap";
export default function ProfilePage() {
    React.useEffect(() => {
      if (navigator.platform.indexOf("Win") > -1) {
        document.documentElement.className += " perfect-scrollbar-on";
        document.documentElement.classList.remove("perfect-scrollbar-off");
      }
      document.body.classList.toggle("profile-page");
      // Specify how to clean up after this effect:
      return function cleanup() {
        document.body.classList.toggle("profile-page");
      };
    },[]);
    return (
        <div >
          {/* <Container className="align-items-center"> */}
            <Row>
              <Col className="ml-auto mr-auto contact-profile" lg="4" md="6">
                <Card className="card-coin card-plain">
                  <CardHeader>
                    <img
                      alt="..."
                      className="img-center img-fluid rounded-circle"
                      src={require("../cctv/Av.png").default}
                    />
                    <h4 className="text-center text-orange1">VVR Home Care</h4>
                    {/* <p className="text-center text-black">Director</p> */}
                  </CardHeader>
                  <CardBody>
                      <div className="text-center">
            <div className='contact-item'>
              <p>
                <span className="text-orange1">
                  <i className='fa fa-map-marker text-orange1'></i> Address
                </span>
                No.18 Amarar Jeevanandham Road,
                </p>
                <p>7th Cross Extn, 100 Feet Road,</p>
                
                Gandhipuram,
              
              <p>Coimbatore - 641 027.</p>
            </div>
            <div className='contact-item'>
              <p>
                <span className="text-orange1">
                  <i className='fa fa-phone text-orange1'></i> Phone
                </span>{' '}
                +91 94883 43729
              </p>
            </div>
            <div className='contact-item'>
              <p>
                <span className="text-orange1">
                  <i className='fa fa-envelope-o text-orange1'></i> Email
                </span>{' '}
                vvrhomecare2022@gmail.com
              </p>

              {/* <p>
                <span className="text-orange">
                  <i className='fa fa-map-marker'></i> Service Available Location
                </span>{' '}
                Bangalore || Kolar || Malur || Hosur
              </p> */}
            </div>
            </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          {/* </Container> */}
        </div>
    )
                        }