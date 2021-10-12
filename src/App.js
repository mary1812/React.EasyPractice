import React, { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import MainPage from "pages/MainPage";
import HelloUserCard from "components/HelloUserCard";
import { UserContext } from "./contexts";
import UserLoader from "components/UserLoader";
import Calendar from "components/Calendar";
import SignInForm from "./components/SignInForm"

function App(props) {
  const [user, setUser] = useState({
    id: 1,
    fullName: "User Userovich",
    userImg:
      "https://nogivruki.ua/wp-content/uploads/2018/08/default-user-image.png",
  });

  return (
    <BrowserRouter>
      <Route exact path="/" component={MainPage} />
      <UserContext.Provider value={[user, setUser]}>
        <HelloUserCard />
        <UserLoader />
        <Route path="/" component={Calendar} />
        <SignInForm/>
      </UserContext.Provider>
    </BrowserRouter>
  );
}
export default App;
