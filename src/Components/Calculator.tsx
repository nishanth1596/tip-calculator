import CalculationInput from "./CalculationInput";
import Display from "./Display";

const Calculator = () => {
  return (
    <article className="rounded-t-3xl bg-white pb-8 drop-shadow-[0_35px_35px_rgba(0,0,0,0.2)]">
      <CalculationInput />
      <Display />
    </article>
  );
};

export default Calculator;

// rgba(79, 165, 175, 0.2)
