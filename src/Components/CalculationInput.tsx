import Tip from "./Tip";
import dollarImg from "../assets/icon-dollar.svg";

const CalculationInput = () => {
  return (
    <div className="p-8">
      <label
        className="text-5 text-5E7a7d block text-base leading-6 font-bold capitalize"
        htmlFor="bill"
      >
        Bill
      </label>

      <div className="relative flex items-center">
        <img
          src={dollarImg}
          alt="Dollar"
          className="left-5gr absolute w-2.5 shadow-none"
        />
        <input
          className="bg-F3F9FA w-full py-1.5 pr-[1.13rem] text-right"
          type="number"
          id="bill"
          value={142.55}
        />
      </div>

      <div className="mt-8">
        <h3 className="text-5E7a7d text-base leading-6 font-bold">
          Select Tip %
        </h3>
        <Tip tipPercent={5} />
        <Tip tipPercent={10} />
        <Tip tipPercent={15} />
        <Tip tipPercent={25} />
        <Tip tipPercent={50} />
        <Tip />
      </div>

      <label htmlFor="numberOfPeople">Number of People</label>
      <input type="number" />
    </div>
  );
};

export default CalculationInput;
