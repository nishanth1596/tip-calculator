import Tip from "./Tip";
import dollarImg from "../assets/icon-dollar.svg";
import personIcon from "../assets/icon-person.svg";
import Label from "./Label";

const CalculationInput = () => {
  return (
    <div className="p-8">
      <Label img={dollarImg} name="bill" />
      <h3 className="text-5E7a7d mt-8 text-base leading-6 font-bold">
        Select Tip %
      </h3>
      <div className="mt-4 grid grid-cols-2 gap-4 text-center">
        <Tip tipPercent={5} />
        <Tip tipPercent={10} />
        <Tip tipPercent={15} />
        <Tip tipPercent={25} />
        <Tip tipPercent={50} />
        <Tip />
      </div>

      <div className="mt-8">
        <Label name="Number of People" img={personIcon} />
      </div>
    </div>
  );
};

export default CalculationInput;
