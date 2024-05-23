import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";

export default function FooterComponent() {
  return (
    <Footer container>
      <div className="w-full">
        <Footer.Divider />
        <div className="w-full place-content-center">
          <Footer.Copyright by="Team 2" year={2024} />
          <div className="mt-4 flex justify-center place-content-center">
            <Footer.Icon
              className="footer-icon"
              href="https://www.linkedin.com/"
              icon={BsFacebook}
            />
            <Footer.Icon
              className="footer-icon"
              href="https://www.instagram.com/"
              icon={BsInstagram}
            />
            <Footer.Icon
              className="footer-icon"
              href="https://twitter.com/"
              icon={BsTwitter}
            />
            <Footer.Icon
              className="footer-icon"
              href="https://github.com/Jason897571/Meal-Map"
              icon={BsGithub}
            />
            <Footer.Icon
              className="footer-icon"
              href="https://dribbble.com/"
              icon={BsDribbble}
            />
          </div>
        </div>
      </div>
    </Footer>
  );
}
