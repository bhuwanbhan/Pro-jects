import React from 'react'
import "./Sidebar.css"
import { faPieChart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fontGrid } from '@mui/material/styles/cssUtils';
function Sidebar() {
  const parent=[
    {name:"Home", path:"/home", icon: <FontAwesomeIcon icon={faPieChart}/>},
    {name:"dashboard", path:"/dashboard", icon: <FontAwesomeIcon icon={faPieChart}/>},
    {name:"Home", path:"/home", icon: <FontAwesomeIcon icon={faPieChart}/>},
    {name:"Home", path:"/home", icon: <FontAwesomeIcon icon={faPieChart}/>},
    {name:"Home", path:"/home", icon: <FontAwesomeIcon icon={faPieChart}/>},
    {name:"Home", path:"/home", icon: <FontAwesomeIcon icon={faPieChart}/>},
    {name:"Home", path:"/home", icon: <FontAwesomeIcon icon={faPieChart}/>},
    {name:"Home", path:"/home", icon: <FontAwesomeIcon icon={faPieChart}/>},
    {name:"Home", path:"/home", icon: <FontAwesomeIcon icon={faPieChart}/>},
    {name:"Home", path:"/home", icon: <FontAwesomeIcon icon={faPieChart}/>},
    {name:"Home", path:"/home", icon: <FontAwesomeIcon icon={faPieChart}/>},
    {name:"Home", path:"/home", icon: <FontAwesomeIcon icon={faPieChart}/>},
    {name:"Home", path:"/home", icon: <FontAwesomeIcon icon={faPieChart}/>},
    {name:"Home", path:"/home", icon: <FontAwesomeIcon icon={faPieChart}/>},
    {name:"Home", path:"/home", icon: <FontAwesomeIcon icon={faPieChart}/>},
    {name:"Home", path:"/home", icon: <FontAwesomeIcon icon={faPieChart}/>},
  ]
  return (
    <>
    {parent.map((item,index)=>(
      <li key={index}>
        <h1>{item.icon} {item.name}</h1>
      </li>
))}
    </>
  )
}

export default Sidebar