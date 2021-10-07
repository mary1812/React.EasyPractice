import { UserContext } from "../../contexts";
import {useContext} from "react"


function HelloUserCard() {
  const [user] = useContext(UserContext)
  return (<div style={{ display: 'flex', justifyContent: 'flex-end' }}>
    <h1>Hello {user.fullName}</h1>
    <img src={user.userImg} alt="img" style={{ width: '100px' }}></img>
  </div>)
}

export default HelloUserCard;
