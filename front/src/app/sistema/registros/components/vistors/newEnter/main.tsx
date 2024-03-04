/* eslint-disable react/no-children-prop */
import Overlay from "@/app/sistema/components/overlay/hidden";
import NewEntry from "./component/newEnter/newEnter";
import { card } from "@/app/types/cards";
import Loading from "@/app/sistema/components/takePhoto/component/loading/loading";


export default function Entry({ cards }: card) {
  return (
    <>
      <Overlay
        children={
          <>
            <NewEntry cards={cards} />
          </>
        }
        handleOverlayVisibility={"default"}
      />
    </>
  );
}
