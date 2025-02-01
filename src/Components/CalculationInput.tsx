import Tip from "./Tip";
import dollarImg from "../assets/icon-dollar.svg";
import personIcon from "../assets/icon-person.svg";
import Label from "./Label";
import { useState } from "react";

type CalculationInputProps = {
  setBill: React.Dispatch<React.SetStateAction<number | null | undefined>>;
  setNumPpl: React.Dispatch<React.SetStateAction<number | null>>;
  handletip: (value: number) => void;
  bill: number | null | undefined;
  numPpl: number | null;
};

const CalculationInput = ({
  setBill,
  handletip,
  setNumPpl,
  bill,
  numPpl,
}: CalculationInputProps) => {
  const [activeTip, setActiveTip] = useState<number | null>(null);

  function handleActiveTip(id: number): void {
    setActiveTip(id);
  }

  return (
    <div className="p-8 md:pt-11 md:pr-0 md:pb-12 md:pl-12">
      <Label
        img={dollarImg}
        name="bill"
        id="bill"
        setBill={setBill}
        inputValue={bill}
      />
      <h2 className="text-5E7a7d mt-8 text-base leading-6 font-bold md:mt-10">
        Select Tip %
      </h2>
      <div className="mt-4 grid grid-cols-2 gap-4 text-center md:grid-cols-3">
        <Tip
          tipPercent={5}
          handletip={handletip}
          handleActiveTip={handleActiveTip}
          isActive={activeTip === 5}
        />
        <Tip
          tipPercent={10}
          handletip={handletip}
          handleActiveTip={handleActiveTip}
          isActive={activeTip === 10}
        />
        <Tip
          tipPercent={15}
          handletip={handletip}
          handleActiveTip={handleActiveTip}
          isActive={activeTip === 15}
        />
        <Tip
          tipPercent={25}
          handletip={handletip}
          handleActiveTip={handleActiveTip}
          isActive={activeTip === 25}
        />
        <Tip
          tipPercent={50}
          handletip={handletip}
          handleActiveTip={handleActiveTip}
          isActive={activeTip === 50}
        />
        <Tip
          handleActiveTip={handleActiveTip}
          isActive={activeTip === 100}
          handletip={handletip}
        />
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
