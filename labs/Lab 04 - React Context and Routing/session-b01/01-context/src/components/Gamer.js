import GamerInformation from "components/GamerInformation";
import GamerStatus from "components/GamerStatus";
import GamerUsername from "components/GamerUsername";

export default function Gamer(props) {
  return (
    <>
      <GamerInformation />
      <GamerStatus />
      <GamerUsername />
    </>
  );
}
