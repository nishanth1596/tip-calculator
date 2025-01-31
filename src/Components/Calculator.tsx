import CalculationInput from "./CalculationInput";
import Display from "./Display";

const Calculator = () => {
  return (
    <article className="rounded-t-3xl bg-white pb-8 drop-shadow-[0_35px_35px_rgba(0,0,0,0.2)] md:grid md:grid-cols-2 md:gap-12 md:pb-0">
      <CalculationInput />
      <Display />
    </article>
  );
};

export default Calculator;
