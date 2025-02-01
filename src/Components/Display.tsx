type DisplayProps = {
  amount: number | string;
  tipAmount: number | string;
  handleReset: () => void;
};

const Display = ({ amount, tipAmount, handleReset }: DisplayProps) => {
  return (
    <div className="bg-00474B mx-6 rounded-2xl px-6 pt-9 pb-6 text-white md:my-8 md:mr-8 md:p-10">
      <div className="flex items-center justify-between md:mt-4 md:pb-2.5">
        <h3 className="text-base leading-6 font-normal">
          Tip Amount
          <span className="text-7F9D9F block text-sm leading-5">/ person</span>
        </h3>
        <p className="text-26C2AE text-[2rem] leading-12 font-bold tracking-[-.67px]">
          ${tipAmount ? tipAmount : "0.00"}
        </p>
      </div>

      <div className="mt-5 md:mt-10">
        <div className="flex items-center justify-between">
          <h3 className="text-base leading-6 font-normal">
            Total
            <span className="text-7F9D9F block text-sm leading-5">
              / person
            </span>
          </h3>
          <p className="text-26C2AE text-[2rem] leading-12 font-bold tracking-[-.67px]">
            ${amount}
          </p>
        </div>
      </div>

      <button
        onClick={handleReset}
        className="bg-26C2AE hover:bg-9FE8DF text-00474B mt-8 w-full cursor-pointer rounded-md px-8 py-2.5 text-xl leading-[1.875rem] font-bold uppercase md:mt-[7.63rem]"
      >
        Reset
      </button>
    </div>
  );
};

export default Display;
