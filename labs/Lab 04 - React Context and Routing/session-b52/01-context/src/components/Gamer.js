import { GamerInformation } from "components/GamerInformation";
import { GamerStatus } from "components/GamerStatus";
import { GamerUsername } from "components/GamerUsername";

const Gamer = () => {
  return (
    <>
      <GamerInformation />
      <GamerStatus />
      <GamerUsername />
    </>
  );
};

export { Gamer };
