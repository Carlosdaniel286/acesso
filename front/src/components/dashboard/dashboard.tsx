import style from "./style/dashboard.module.css";
import { useState } from "react";
import DashboardCreatVistor from "./dashboardCreatVistor/dashboardcreatVistor";
import DashboardAddVisitor from "./AddVisitorImage/addVisitorImage";
import FilterSearch from "./filterSearch/filterSearch";

export default function Dashboard() {
  const [hidden, setHidden] = useState({
    filter: false,
    vistor: false,
  });

  return (
    <div className={style.dashboard}>
      
        {hidden.vistor && (
        <DashboardCreatVistor
         renderComponents={(()=>{
          setHidden({ ...hidden, vistor: !hidden.vistor });
         })}
        />
       )}
       
       <ul>
         <DashboardAddVisitor
           renderComponents={(()=>{
            setHidden({ ...hidden, vistor: !hidden.vistor });
           })}
         />
          
         <FilterSearch
          renderComponents={(()=>{
            setHidden({ ...hidden, filter: !hidden.filter });
          })}
          renderOptions={hidden.filter}
         />
      </ul>
    </div>
  );
}
