import React, { useState } from 'react';
import {
  MDBContainer,MDBNavbar,MDBNavbarBrand,MDBNavbarToggler,MDBNavbarNav,MDBNavbarItem,MDBNavbarLink,MDBCollapse,
  MDBIcon, MDBBtn, MDBModal, MDBModalDialog,MDBModalContent,MDBModalHeader,MDBModalTitle,MDBModalBody,MDBModalFooter,
} from 'mdb-react-ui-kit';
import { Button } from 'react-bootstrap';

const MyNavbar = () => {
  const [showNav, setShowNav] = useState(false);
  const [basicModal, setBasicModal] = useState(false);
  const [loginID , setLoginID] =useState("");
  const [loginPassword , setLoginPassword] =useState("");

  const toggleShow = () => setBasicModal(!basicModal);

  const handleSubmit = async()=>{
      // console.log(loginID ,loginPassword );
      try{
        if ( loginID && loginPassword) 
        {
          const UserLoginData = { 
            UserEmail : loginID,
            UserPassword: loginPassword 
          }
          console.log("User Login Details......", UserLoginData);
          const resp = await fetch ("http://localhost:4000/api/user/login",
           {
            method : "POST",
            headers : {
                    "Content-Type" : "application/json",
            },
            body : JSON.stringify(UserLoginData)
           });
           const apiData = await resp.json();
           console.log(`API DATA.......${apiData.token}`); 
        }
        else
        {
          alert("User Email and password are wrong");
        }

      }
      catch(err){
        console.log(`Error.....${err}`);
      }
      setLoginID(" ");
      setLoginPassword(" ");
  }

  return (
    <MDBNavbar className='shadow p-2 mb-3 bg-white ' expand='lg' light bgColor='white' >
      <MDBContainer fluid>
       <img src="/images/Logo.jpg" height={80} width={200} />
        <MDBNavbarToggler
          type='button'
          data-target='#navbarRightAlignExample'
          aria-controls='navbarRightAlignExample'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowNav(!showNav)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>
        <MDBCollapse navbar show={showNav}>
          <MDBNavbarNav >
          <MDBNavbarItem>
              <MDBNavbarLink href='/'></MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
          <MDBNavbarNav >
          <MDBNavbarItem>
              <MDBNavbarLink href='/'>Home</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='/about'>About</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='/course'>Courses</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='/gallery'>Gallery</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='/event'>Events</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='/career'>Career</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='/contact'>Contact</MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
          <Button class='btn btn-primary btn- sm btn-block  ' onClick={toggleShow}>Login/SignUp</Button>

          {/* Modal for user login  */}
          
          <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Login to Continue</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
           <form>
            <div >
            <div className="form-outline mb-4">
                    <label className="form-label" for="email" >Email address</label>
                    <input type="email" id="email" className="form-control form-control-lg"  
                    onChange={(e)=>setLoginID(e.target.value)}/>
                  </div>

                  <div className="form-outline mb-4">
                  <label className="form-label" for="password">Password</label>
                    <input type="password" id="password" className="form-control form-control-lg"
                    onChange={(e)=>setLoginPassword(e.target.value)} /> 
                  </div>

                  <div className="pt-1 mb-4" style={{display:'flex' , justifyContent:'center'}}>
                    <button className="btn w-100 btn-dark btn-lg btn-block "  type="button" onClick={handleSubmit}>Login</button>
                  </div>
                  <div style={{display:'flex' , justifyContent:'center'}}>
                  <a className="small text-muted" href="#!">Forgot password?</a>
                  </div><br/>
                  <span  style={{display:'flex' , justifyContent:'center'}}>don't Have account :-  
                  <a className="btn btn-secondary btn-sm btn-block " href="/signup" > Sign up</a></span>
               
                  </div>
                  </form>
            </MDBModalBody>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>

        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}
export default MyNavbar 