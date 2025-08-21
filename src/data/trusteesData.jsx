// src/data/trustees.js  (or wherever you keep the array)
import IkoTambayaImg   from '../assets/iko_tambaya.jpg';
import JuliusImg       from '../assets/Julius.png';
import GodiyaImg       from '../assets/Godiya.jpg';
import EmmaImg         from '../assets/Emma.png';

const trustees = [
  {
    id: "1",
    name: "Iko Tambaya",
    title: "Chair & Founder",
    bio: "From candle-lit verandas in Kaduna to award-winning emissions dashboards-turning data into scholarships for the next African coder.",
    image: IkoTambayaImg,
  },
  {
    id: "2",
    name: "Dr Julius Mboli",
    title: "Board Member",
    bio: "Lecturer & circular-economy evangelist who builds AI decision-support systems so businesses swap linear waste for closed-loop profit.",
    image: JuliusImg,
  },
  {
    id: "3",
    name: "Godiya Yahaya",
    title: "Board Member",
    bio: "From counting Legionella cells at 2 a.m. to counting opportunities for under-represented teens-she keeps our programmes safe, measurable and wildly inclusive.",
    image: GodiyaImg,
  },
  {
    id: "4",
    name: "Prof Emmanuel Essah",
    title: "Board Member",
    bio: "Head of the School of the Built Environment, University of Reading—mentor, author, globe-trotting professor ensuring our research stays bulletproof.",
    image: EmmaImg,
  },
];

export default trustees;