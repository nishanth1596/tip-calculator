import { useState } from "react";
import CalculationInput from "./CalculationInput";
import Display from "./Display";
import { useForm, Controller } from "react-hook-form";

const Calculator = () => {
  const [bill, setBill] = useState();
  const [tip, setTip] = useState();
  const [numPpl, setNumPpl] = useState();
  const { reset, register, handleSubmit, control } = useForm();

  // const amount = (parseFloat(((bill * tip) / 100).toFixed(2)) + bill) / numPpl;
  const amount = numPpl
    ? (Math.round((bill * tip) / 100) + bill) / numPpl
    : "0.00";
  const tipAmount = parseFloat(((tip * bill) / 100 / numPpl).toFixed(2));

  function handletip(value) {
    setTip(value);
  }

  function handleReset() {
    setBill(null);
    setTip(null);
    setNumPpl(null);
    reset();
  }

  return (
    <article className="rounded-t-3xl bg-white pb-8 drop-shadow-[0_35px_35px_rgba(0,0,0,0.2)] sm:mx-6 md:grid md:grid-cols-2 md:gap-12 md:rounded-3xl md:pb-0">
      <CalculationInput
        setBill={setBill}
        handletip={handletip}
        setNumPpl={setNumPpl}
        register={register}
        handleSubmit={handleSubmit}
        control={control}
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
