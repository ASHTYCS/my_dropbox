import React, { useState } from "react";
import { Nav, Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuthenticate } from "../Context";
import { FaUserEdit, FaSignOutAlt, FaBars } from "react-icons/fa";

export default function NavbarComponent() {
  const { logout } = useAuthenticate();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.log(error.message);
    }
  };

  // Inline styles for the sidebar
  const sidebarStyle = {
    width: "250px",
    height: "100vh", // Set height to 100vh to occupy full viewport height
    backgroundColor: "#f8f9fa",
    position: "fixed",
    top: "0",
    left: "0",
    padding: "20px",
    boxShadow: "2px 0 5px rgba(0, 0, 0, 0.1)",
    zIndex: "1000", // Set a high z-index for the sidebar
    display: window.innerWidth >= 768 ? "block" : "none", // Only display on larger screens
  };

  return (
    <>
      {/* Sidebar visible on larger screens */}
      <div style={sidebarStyle}>
        <Nav className="flex-column p-3">
          <h3 style={{ color: "#9ACD32" }}>My Dropbox</h3>
          <Nav.Link
            as={Link}
            to="/user"
            className="d-flex align-items-center mb-3"
            style={{
              backgroundColor: "#008000",
              color: "white",
              padding: "0.375rem 0.75rem",
              borderRadius: "4px",
            }}
          >
            <FaUserEdit className="me-2" />
            Edit Profile
          </Nav.Link>
          <Button
            onClick={handleLogout}
            className="p-2 d-flex align-items-center"
            style={{
              backgroundColor: "#9ACD32",
              color: "white",
              borderRadius: "4px",
            }}
          >
            <FaSignOutAlt className="me-2" />
            Logout
          </Button>
        </Nav>
      </div>

      {/* Toggle button to open the modal side menu for mobile view */}
      <Button
        variant="secondary"
        onClick={handleShow}
        className="m-2 d-md-none" // Only show this on mobile
        style={{ backgroundColor: "#9ACD32", color: "black" }}
      >
        <FaBars /> {/* Icon to represent the menu */}
      </Button>

      {/* Modal used as a side menu in mobile view */}
      <Modal show={show} onHide={handleClose} animation={false} centered>
        <Modal.Header closeButton>
          <Modal.Title style={{ color: "#9ACD32" }}>My Dropbox</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Nav className="flex-column">
            <Nav.Link
              as={Link}
              to="/user"
              className="d-flex align-items-center mb-3"
              style={{
                backgroundColor: "#008000",
                color: "white",
                padding: "0.375rem 0.75rem",
                borderRadius: "4px",
              }}
            >
              <FaUserEdit className="me-2" />
              Edit Profile
            </Nav.Link>
            <Button
              onClick={handleLogout}
              className="p-2 d-flex align-items-center"
              style={{
                backgroundColor: "#9ACD32",
                color: "white",
                borderRadius: "4px",
              }}
            >
              <FaSignOutAlt className="me-2" />
              Logout
            </Button>
          </Nav>
        </Modal.Body>
      </Modal>
    </>
  );
}
