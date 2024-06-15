import {Avatar, Button, Icon, Input, ShellBar, ShellBarItem, StandardListItem} from '@ui5/webcomponents-react';

import {useState} from "react";
import {SideNav} from "./SideNavigation.tsx";
import "@ui5/webcomponents-icons/dist/AllIcons.js";
import './App.css';
import {Route, Routes} from 'react-router-dom';


const FromMyTeam = () => <div>From My Team</div>;
const FromOtherTeams = () => <div>From Other Teams</div>;
const Home = () => <div>Home Page</div>;
const Locations = () => <div>Locations Page</div>;
const Events = () => <div>Events Page</div>;
const History = () => <div>History Page</div>;

function App() {
    const [collapsed, setCollapsed] = useState<boolean>(false)
    const handleNavMenuButtonClick = (): void => {
        setCollapsed(!collapsed);
    }

    return (
        <div className="tool-layout">
            <ShellBar
                startButton={
                    <Button
                        style={{
                            position: "absolute",
                            left: "0.6rem",
                        }}
                        icon="menu2"
                        className="mr-4"
                        design="Emphasized"
                        onClick={handleNavMenuButtonClick}
                    />
                }
                logo={<img alt="SAP Logo" src="https://sap.github.io/ui5-webcomponents/images/sap-logo-svg.svg"/>}
                menuItems={<><StandardListItem data-key="1">Menu Item 1</StandardListItem><StandardListItem
                    data-key="2">Menu Item 2</StandardListItem><StandardListItem data-key="3">Menu Item
                    3</StandardListItem></>}
                notificationsCount="10"
                onCoPilotClick={function _a() {
                }}
                onLogoClick={function _a() {
                }}
                onMenuItemClick={function _a() {
                }}
                onNotificationsClick={function _a() {
                }}
                onProductSwitchClick={function _a() {
                }}
                onProfileClick={function _a() {
                }}
                onSearchButtonClick={function _a() {
                }}
                primaryTitle="Shell Bar"
                profile={<Avatar>
                    <img
                        src="https://sap.github.io/ui5-webcomponents-react/assets/Person-B7wHqdJw.png"/></Avatar>}
                searchField={<Input icon={<Icon interactive name="search"/>} showClearIcon/>}
                secondaryTitle="Fiori 3 Shell Bar"
                showCoPilot
                showNotifications
                showProductSwitch
            >
                <ShellBarItem
                    count="3"
                    icon="add"
                    text="ShellBarItem"
                />
            </ShellBar>
            <SideNav collapsed={collapsed}/>
            <div className="content">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/from-my-team" element={<FromMyTeam/>}/>
                    <Route path="/from-other-team" element={<FromOtherTeams/>}/>
                    <Route path="/locations" element={<Locations/>}/>
                    <Route path="/local-events" element={<Events/>}/>
                    <Route path="/others-events" element={<Events/>}/>
                    <Route path="/history" element={<History/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
