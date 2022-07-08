
import {FaRegBell} from 'react-icons/fa';
import {FiHeadphones,FiMoreHorizontal} from 'react-icons/fi';

import{IoPeople,IoCallSharp} from 'react-icons/io5';
import {MdAssignment} from 'react-icons/md';
import {BsFillCalendarDateFill} from 'react-icons/bs';
import {ImFilesEmpty} from 'react-icons/im';
import {AiOutlineAppstoreAdd} from 'react-icons/ai';
import {BiHelpCircle} from 'react-icons/bi';
export const sidebarUp=[
    {
        id:1,
        name:'Activity',
        icon:<FaRegBell/>
        
    },
    {
        id:2,
        name:'Chat',
        icon:<FiHeadphones/>,
        
    },
    {
        id:3,
        name:'Teams',
        icon:<IoPeople/>,
        
    },
    {
        id:4,
        name:'Assignments',
        icon:<MdAssignment/>,
        
    },
    {
        id:5,
        name:'Calender',
        icon:<BsFillCalendarDateFill/>,
        
    },
    {
        id:6,
        name:'Calls',
        icon:<IoCallSharp/>,
        
    },
    {
        id:7,
        name:'Files',
        icon:<ImFilesEmpty/>,
        
    },
]

export const sidebarMore={
    id:1,
    icon:<FiMoreHorizontal/>,
}
export const sidebarBottom=[
    {
        id:1,
        icon:<AiOutlineAppstoreAdd/>,
        name:'Apps'
    },
    {
        id:2,
        icon:<BiHelpCircle/>,
        name:'Help'
    }
]