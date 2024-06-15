import {SideNavigation, SideNavigationItem, SideNavigationSubItem} from '@ui5/webcomponents-react';
import React from "react";
import {useNavigate} from 'react-router-dom';

import type {Ui5CustomEvent} from '@ui5/webcomponents-react/dist/types';
import {SideNavigationDomRef} from '@ui5/webcomponents-react/dist/webComponents/SideNavigation';

interface SideNavProps {
    collapsed: boolean;
}

export const SideNav: React.FC<SideNavProps> = ({collapsed}) => {

    const navigate = useNavigate();
    const handleSelectionChange = (event: Ui5CustomEvent<SideNavigationDomRef>) => {
        const selectedKey = event.detail.item.dataset.key;
        navigate(selectedKey);
    };


    return (
        <SideNavigation
            collapsed={collapsed}
            fixedItems={<><SideNavigationItem href="https://www.sap.com/index.html" icon="chain-link" target="_blank"
                                              text="External Link"></SideNavigationItem><SideNavigationItem
                icon="history"
                text="History"/></>}
            onSelectionChange={handleSelectionChange}
        >
            <SideNavigationItem
                icon="home"
                text="Home"
                data-key="/"
            />


            <SideNavigationItem
                expanded
                icon="group"
                text="People"
            >
                <SideNavigationSubItem text="From My Team" data-key="/from-my-team"/>
                <SideNavigationSubItem text="From Other Teams" data-key="/from-other-team"/>
            </SideNavigationItem>
            <SideNavigationItem
                icon="locate-me"
                selected
                text="Locations"
            />
            <SideNavigationItem
                icon="calendar"
                text="Events"
            >
                <SideNavigationSubItem text="Local" data-key="/local-events"/>
                <SideNavigationSubItem text="Others" data-key="/others-events"/>
            </SideNavigationItem>
        </SideNavigation>
    )
}

