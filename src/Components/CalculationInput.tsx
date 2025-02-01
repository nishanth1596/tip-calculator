import Tip from "./Tip";
import dollarImg from "../assets/icon-dollar.svg";
import personIcon from "../assets/icon-person.svg";
import Label from "./Label";

const CalculationInput = ({ setBill, handletip, setNumPpl, bill, numPpl }) => {
  return (
    <div className="p-8 md:pt-11 md:pr-0 md:pb-12 md:pl-12">
      <Label
        img={dollarImg}
        name="bill"
        id="bill"
        setBill={setBill}
        inputValue={bill}
      />
      <h3 className="text-5E7a7d mt-8 text-base leading-6 font-bold md:mt-10">
        Select Tip %
      </h3>
      <div className="mt-4 grid grid-cols-2 gap-4 text-center md:grid-cols-3">
        <Tip tipPercent={5} handletip={handletip} />
        <Tip tipPercent={10} handletip={handletip} />
        <Tip tipPercent={15} handletip={handletip} />
        <Tip tipPercent={25} handletip={handletip} />
        <Tip tipPercent={50} handletip={handletip} />
        <Tip />
      </div>

      <div className="mt-8 md:mt-10">
        <Label
          name="Number of People"
          id="numberOfPeople"
          img={personIcon}
          setNumPpl={setNumPpl}
          inputValue={numPpl}
        />
      </div>
    </div>
  );
};

export default CalculationInput;
