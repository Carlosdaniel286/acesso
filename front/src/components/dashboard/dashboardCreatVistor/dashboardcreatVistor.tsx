import Overlay from "@/components/overlay/hidden";
import CreatVisitors from "@/components/vitors/creatVistors/creatVistors";
import { RenderComponents } from "../types/dashboardRender";


export default function DashboardCreatVistor({renderComponents}:RenderComponents){
  return(
     <>
      <Overlay
          handleOverlayVisibility={() => {
           renderComponents()
          }}
          children={
            <>
              <CreatVisitors
                displayCreatVsitor={() => {
                renderComponents()
              }}
              />
            </>
          }
        />
     
  
     </>
  )


}