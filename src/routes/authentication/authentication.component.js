import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import Button from "../../components/button/button.component";
import "./authentication.styles.scss";

const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignInForm />
      {/* for LOGIN/SIGNUP Button */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "transparent",
          marginLeft: "-400px",
          marginRight: "110px",
          rotate: "90deg",
          //top: "220px",
          //marginTop: "0px",
        }}
      >
        <Button
          style={{
            fontSize: "95px",
            cursor: "default",
            pointerEvents: "none",
          }}
          buttonType={""}
          disabled
        >
          LOGIN/SIGNUP
        </Button>
      </div>
      {/* ---------X-----------*/}
      <SignUpForm />
    </div>
  );
};

export default Authentication;
