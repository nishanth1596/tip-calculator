const Display = () => {
  return (
    <div className="bg-00474B mx-6 rounded-2xl px-6 pt-9 pb-6 text-white">
      <div className="flex items-center justify-between">
        <h3 className="text-base leading-6 font-bold">
          Tip Amount
          <span className="text-7F9D9F block text-sm leading-5">/ person</span>
        </h3>
        <p className="text-26C2AE text-[2rem] leading-12 font-bold tracking-[-.67px]">
          $X
        </p>
      </div>

      <div className="mt-5">
        <div className="flex items-center justify-between">
          <h3 className="text-base leading-6 font-bold">
            Total
            <span className="text-7F9D9F block text-sm leading-5">
              / person
            </span>
          </h3>
          <p className="text-26C2AE text-[2rem] leading-12 font-bold tracking-[-.67px]">
            $X
          </p>
        </div>
      </div>

      <button className="bg-26C2AE text-00474B mt-8 w-full rounded-md px-8 py-2.5 text-xl leading-[1.875rem] font-bold uppercase">
        Reset
      </button>
    </div>
  );
};

export default Display;
