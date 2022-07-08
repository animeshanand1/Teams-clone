import { MdDialerSip, MdKeyboardVoice } from "react-icons/md";
import { FcContacts } from "react-icons/fc";
import { BiHistory } from "react-icons/bi";
export const callsData = [
  {
    id: 1,
    name: "Speed-dial",
    icon: <MdDialerSip />,
  },
  {
    id: 2,
    name: "Contacts",
    icon: <FcContacts />,
  },
  {
    id: 3,
    name: "History",
    icon: <BiHistory />,
  },
  {
    id: 4,
    name: "Voicemail",
    icon: <MdKeyboardVoice />,
  },
];
export const dialerData = [
  { id: 1, name: "Anand", type: "Student" },
  { id: 2, name: "Animesh", type: "Student" },
  { id: 4, name: "William", type: "Student" },
  { id: 5, name: "Logan", type: "Student" },
];
