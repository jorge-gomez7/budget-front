import React from 'react';

import { AiOutlineHome } from "react-icons/ai";
import { IoExitOutline } from "react-icons/io5";
import { FaRegMoneyBillAlt } from "react-icons/fa";

export const SidebarData = [
    {
        title: 'Home',
        icon: <AiOutlineHome/>,
        link: '/home'
    },
    {
        title: 'Transfer',
        icon: <IoExitOutline/>,
        link: '/transfer'
    },
    {
        title: 'Expenses',
        icon: <FaRegMoneyBillAlt/>,
        link: '/expenses'
    },
    {
        title: 'Incomes',
        icon: <FaRegMoneyBillAlt/>,
        link: '/incomes'
    },
];

