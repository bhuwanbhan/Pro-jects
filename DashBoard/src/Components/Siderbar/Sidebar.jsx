import React from 'react'
import "./Sidebar.css"
import { faBarChart, faBookmark, faCalendarMinus, faCartShopping, faFileImage, faFolder, faKey, faLock, faMailBulk, faMapLocation, faMessage, faNetworkWired, faPhoneAlt, faPieChart, faProjectDiagram, faUnlock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';




function Sidebar() {
  const parent=[
    {title:"Home", path:"/", icon: <FontAwesomeIcon icon={faPieChart}/>},
    {title:"Ecommerce", path:"/ecommerce", icon: <FontAwesomeIcon icon={faCartShopping}/>},
    {title:"CRM", path:"/CRM", icon: <FontAwesomeIcon icon={faPhoneAlt}/>},
    {title:"Project Management", path:"/project-management", icon: <FontAwesomeIcon icon={faProjectDiagram}/>},
    {title:"Travel Agency", path:"/travel-agency", icon: <FontAwesomeIcon icon={faMapLocation}/>},
    {title:"Chat", path:"/chat", icon: <FontAwesomeIcon icon={faMessage}/>},
    {title:"Email", path:"/email", icon: <FontAwesomeIcon icon={faMailBulk}/>},
    {title:"Events", path:"/events", icon: <FontAwesomeIcon icon={faBookmark}/>},
    {title:"Kanban", path:"/kanban", icon: <FontAwesomeIcon icon={faBarChart}/>},
    {title:"Social", path:"/social", icon: <FontAwesomeIcon icon={faNetworkWired}/>},
    {title:"Galary", path:"/galary", icon: <FontAwesomeIcon icon={faFileImage}/>},
    {title:"File Manager", path:"/file-manager", icon: <FontAwesomeIcon icon={faFolder}/>},
    {title:"Calinder", path:"/Calinder", icon: <FontAwesomeIcon icon={faCalendarMinus}/>},
    {title:"Sign-in", path:"/sign-in", icon: <FontAwesomeIcon icon={faUnlock}/>},
    {title:"Sign-up", path:"/sign-up", icon: <FontAwesomeIcon icon={faLock}/>},
    {title:"Forget", path:"/forget", icon: <FontAwesomeIcon icon={faKey}/>},
  ]
  return (
    <>
    <ul>
    {parent.map((item,index)=>(
    <Link key={index} to={item.path}>
      <li>
        <span id="icon">{item.icon}</span> 
        <span id="title">{item.title}</span>
      </li>
    </Link>
))}
</ul>
    </>
  )
}

export default Sidebar;