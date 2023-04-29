import { useState } from "react";
import {GoChevronDown, GoChevronLeft} from 'react-icons/go';
import className from "classnames";


function ExpandablePanel({header,children, warning}){
  const classes= className(
    "mb-2 border rounded",
    {
      "border-yellow-400":warning
    }
  )
  const [expanded, setExpanded] = useState(false);

  const handleClick = () => {
    setExpanded(!expanded);
  }

  return (
    <div className={classes}>
        <div className='flex p-1 justify-between items-center'>
          <div className='flex flex-row items-center justify-between'> 
             {header}
          </div>
          <div onClick={handleClick} className="cursor-pointer">
           {expanded ? <GoChevronDown />:<GoChevronLeft />}
          </div> 
        </div>
        {
         expanded && <div className="p-2 border-t">{children}</div>
        }
    </div>      
  );
}

export default ExpandablePanel;