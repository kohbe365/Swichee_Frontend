import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "Components/Loader";
import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "Components/Modal.css";
import logo from "Assets/logo.png";
import ReactStoreBadges from "react-store-badges";


const Title = styled.div`
    font-size: 25px;
    padding : 10px 10px 10px 10px;  
    margin-bottom : 30px;
`
const BoxContent = styled.div`
  font-size: 15px;
  color : gray;
  width : 300PX;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  line-height: 150%
  @media only screen and (max-width: 768px) {
    width: 300px;
  }
  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    width: 500px;
  }
  @media only screen and (min-width: 1025px) {
    width: 500px;
  }
`;
const Login = styled.div`
  background-color: white;
  border-radius: 20px;
  padding: 20px 20px 20px 20px;
`
const Container = styled.div`
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  flex-direction: column;
  position: relative;
  padding: 50px 0px 0px 0px;
  @media only screen and (max-width: 768px) {
    width: 100vw;
  }
  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    width: 100vw;
  }
  @media only screen and (min-width: 1025px) {
    width: 100vw;
  }
`;
const Content = styled.div`
  justify-content: center;
  text-align: left;
  flex-direction: column;
  margin-left:auto;
  margin-right:auto;
  margin-bottom : 5px;
  line-height : 150%
  @media only screen and (max-width: 768px) {
    width: 300px;
  }
  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    width: 500px;
  }
  @media only screen and (min-width: 1025px) {
    width: 500px;
  }

`;
const Btn = styled.button`
  cursor: pointer;
  outline: none;
  width: 100%;
  height: 40px;
  color: white;
  background-color: #ff9900;
  display: flex;
  align-items: center;
  border-radius: 5px;
  border: none;
  justify-content: center;
`;
const SideImg = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Badge = styled.div`
  display: flex;
  align-items: center;
  font-size: 15px;
  margin-right: 10px;
`;
const Logo = styled.div`
  border-radius : 30%;
  overflow: hidden;
  margin: 0px 30px 30px 30px;
`;

const UserPresenter = ({ loading, error }) => {
  return (
    <>
        <form>
            <Container>
            <Logo>
              <img src={logo} alt="logo" height="50px" />
            </Logo>
            <Title>Sign in to Swichee</Title>
            <Login>
              <Content>
                  <div className="form-group">
                    <Content>
                      <label>Username or Email address</label>
                    </Content>
                      <input type="email" className="form-control" placeholder="Enter email" />
                  </div>
              </Content>

              <Content>
                  <div className="form-group">
                  <Content>
                  
                      <label>Password</label>
                      </Content>
                      <input type="password" className="form-control" placeholder="Enter password" />
                  
                  </div>
              </Content>
              
              <Content>
                <SideImg>
                  <div className="form-group">
                      <div className="custom-control custom-checkbox">
                          <input type="checkbox" className="custom-control-input" id="customCheck1" />
                          <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                      </div>
                  </div>
                  <p className="forgot-password text-right">
                      Forgot <a href="#">password?</a>
                  </p>
                </SideImg>
                <div id="open-modal" className="modal-window">
                  <Badge>
                    <a href="#" title="Close" className="modal-close">
                        Close
                    </a>
                    <Badge style={{ marginRight: 5 }}>
                        <ReactStoreBadges
                          platform={"ios"}
                          url={"https://apps.apple.com/au/app/id1472654007"}
                          locale={"ko-kr"}
                        />
                        <ReactStoreBadges
                          platform={"android"}
                          url={
                            "https://play.google.com/store/apps/details?id=com.swichee.swichee&hl=ko&gl=US"
                          }
                          locale={"ko-kr"}
                        />
                    </Badge>
                  </Badge>
                </div>
              </Content>

              <BoxContent>
                  <button type="submit" className="btn btn-dark btn-lg btn-block">Sign in</button>
              </BoxContent>

              <BoxContent>
                <a href="#open-modal">
                  <Btn>
                    <img src={logo} alt="logo" height="36px" />
                    New to Swichee? Create an account.
                  </Btn>
                </a>
              </BoxContent>

            </Login>
        </Container>
        </form>
        
    </>
  );
};

UserPresenter.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default UserPresenter;
