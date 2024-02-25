/* eslint-disable react/no-children-prop */
import Overlay from "@/app/sistema/components/overlay/hidden";
import NewEntry from "./component/newEnter/newEnter";
import { card } from "@/app/types/cards";
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
