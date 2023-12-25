import {
  EuiButton,
  EuiEmptyPrompt,
  EuiFlexGroup,
  EuiImage,
  EuiTitle,
} from "@elastic/eui";

import loginLogo from "../assets/login-photo.jpg";
import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <EuiFlexGroup>
        <EuiImage alt="alt" src={loginLogo} size={"l"} />
        <EuiEmptyPrompt
          paddingSize="l"
          title={<h2>Welcome To The Company Dashboard Site</h2>}
          body={<p>Please login in or create an account.</p>}
          actions={
            <>
              <EuiButton color="primary" fill>
                <Link
                  to={"/dashboard"}
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Login
                </Link>
              </EuiButton>
              <EuiButton color="primary" fill>
                <Link
                  to={"/dashboard"}
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Create Account
                </Link>
              </EuiButton>
            </>
          }
          footer={
            <>
              <EuiTitle size="xxs">
                <Link
                  to={"/dashboard"}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <h3>Forgot account details? Click here.</h3>
                </Link>
              </EuiTitle>
            </>
          }
        />
      </EuiFlexGroup>
    </>
  );
}

export default Login;
