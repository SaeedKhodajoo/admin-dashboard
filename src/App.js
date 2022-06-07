import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Login from "./pages/login/Login";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import "./app.scss";
import { userInputs } from "./assets/data/formSource";
import { useContext } from "react";
import {
  darkModeContext,
  DarkModeContextProvider,
} from "./context/darkModeContext";
import Profile from "./pages/profile/Profile";
import { userColumns, userRows } from "./assets/data/datatablesource";
import Register from "./pages/register/Register";
import { SidebarModeContextProvider } from "./context/sidebarModeContext";
import { ActiveLinkContextProvider } from "./context/activeLinkContext";

function App() {
  const { darkMode } = useContext(darkModeContext);

  return (
    <DarkModeContextProvider>
      <SidebarModeContextProvider>
        <ActiveLinkContextProvider>
          <div className={darkMode ? "app dark" : "app"}>
            <BrowserRouter>
              <Routes>
                <Route path="/">
                  <Route path="login" element={<Login />} />
                  <Route path="register" element={<Register />} />
                  <Route index element={<Home />} />
                  <Route path="profile" element={<Profile />} />

                  <Route path="users">
                    <Route
                      index
                      element={
                        <List
                          url="/users"
                          rowsData={userRows}
                          columnsData={userColumns}
                        />
                      }
                    />
                    <Route path=":userId" element={<Single />} />
                    <Route
                      path="new"
                      element={<New inputs={userInputs} title="Add new user" />}
                    />
                  </Route>
                </Route>
              </Routes>
            </BrowserRouter>
          </div>
        </ActiveLinkContextProvider>
      </SidebarModeContextProvider>
    </DarkModeContextProvider>
  );
}

export default App;
