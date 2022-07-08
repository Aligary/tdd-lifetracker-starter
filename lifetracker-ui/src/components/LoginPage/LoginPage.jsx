import LoginForm from "components/LoginForm/LoginForm"
import * as React from "react"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import "./LoginPage.css"
import { useAuthContext } from "components/contexts/auth"

export default function LoginPage(props) {
  const {user} = useAuthContext()
  const navigate = useNavigate()

  

  useEffect(() => {
    if(user) {
      navigate("/activity")
    }
  }, [user])
  return (
    <div className="login-page">
        {
          <LoginForm isLoggedIn={props.isLoggedIn} setIsLoggedIn={props.setIsLoggedIn}/>
        }
    </div>
  )
}


// const [loggedIn, setLoggedIn] = React.useState(false);
//   const navigate = useNavigate();
//   React.useEffect(() => {
//     if (loggedIn) {
//       navigate("/activity");
//     }
//   }, [loggedIn]);
//   return (
//     <div className="login-page">
//       <LoginForm loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
//     </div>
//   );
