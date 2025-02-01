import { useState } from "react";
import CalculationInput from "./CalculationInput";
import Display from "./Display";

const Calculator = () => {
  const [bill, setBill] = useState<number | null>();
  const [tip, setTip] = useState<number | null>();
  const [numPpl, setNumPpl] = useState<number | null>(0);

  const amount =
    bill && tip && numPpl
      ? (Math.round((bill * tip) / 100) + bill) / numPpl
      : "0.00";
  const tipAmount =
    bill && tip && numPpl
      ? parseFloat(((tip * bill) / 100 / numPpl).toFixed(2))
      : "0.00";

  function handletip(value: number): void {
    setTip(value);
  }

  function handleReset(): void {
    setBill(null);
    setTip(null);
    setNumPpl(0);
  }

  return (
    <article className="rounded-t-3xl bg-white pb-8 drop-shadow-[0_35px_35px_rgba(0,0,0,0.2)] sm:mx-6 md:grid md:grid-cols-2 md:gap-12 md:rounded-3xl md:pb-0">
      <CalculationInput
        bill={bill}
        numPpl={numPpl}
        setBill={setBill}
        handletip={handletip}
        setNumPpl={setNumPpl}
      />
      <Display
        tipAmount={tipAmount}
        amount={amount}
        handleReset={handleReset}
      />
    </article>
  );
};

export default Calculator;
