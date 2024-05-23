import { Button, Navbar } from "flowbite-react";
import { useState } from "react";
// import SignInModal from "../SiginInModal/index";
// import SignUpModal from "../SignUpModal";
import Auth from "../../utils/auth";

const Navigation = () => {
  const [currentModal, setCurrentModal] = useState(null);
  const [formState, setFormState] = useState({
    email: "",
    password: "",
    username: "",
  });

  const handleOpenModal = (modalType) => {
    setFormState({ email: "", password: "", username: "" });
    setCurrentModal(modalType);
  };

  const handleCloseModal = () => {
    setCurrentModal(null);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <Navbar
        fluid
        rounded
        className="h-14 bg-gradient-to-r from-purple-500 to-pink-500"
      >
        <Navbar.Brand className="logo" href="/">
          <img src="/image/logo.png" className="mr-3 h-10 sm:h-9" alt="Logo" />
          <span className="appName self-center whitespace-nowrap text-2xl font-bold dark:text-white">
            Render File
          </span>
        </Navbar.Brand>
        <Navbar.Collapse>
          <Navbar.Link className="font-bold text-2xl" href="/">
            Home
          </Navbar.Link>
          <Navbar.Link className="font-bold text-2xl" href="#top-choices">
            Top Choices
          </Navbar.Link>
          {Auth.loggedIn() && (
            <Navbar.Link className="font-bold text-2xl" href="/your-favorite">
              Your Favourites
            </Navbar.Link>
          )}
          <Navbar.Link className="font-bold text-2xl" href="/about-us">
            About Us
          </Navbar.Link>
          <Navbar.Link className="font-bold text-2xl" href="/donation">
            Donation
          </Navbar.Link>
        </Navbar.Collapse>

        {Auth.loggedIn() ? (
          <>
            <Button onClick={Auth.logout} gradientDuoTone="greenToBlue">
              Log Out
            </Button>
          </>
        ) : (
          <>
            {/* Navbar Sign in and sign up */}
            <Navbar.Collapse>
              <Button
                onClick={() => handleOpenModal("signIn")}
                gradientDuoTone="greenToBlue"
              >
                Sign In
              </Button>
              <Button
                onClick={() => handleOpenModal("signUp")}
                gradientDuoTone="greenToBlue"
              >
                Sign Up
              </Button>
            </Navbar.Collapse>
            {currentModal === "signIn" && (
              <SignInModal
                isOpen={currentModal === "signIn"}
                formState={formState}
                onChange={handleChange}
                onClose={handleCloseModal}
              />
            )}
            {currentModal === "signUp" && (
              <SignUpModal
                isOpen={currentModal === "signUp"}
                formState={formState}
                onChange={handleChange}
                onClose={handleCloseModal}
              />
            )}
          </>
        )}
      </Navbar>
    </>
  );
};

export default Navigation;
