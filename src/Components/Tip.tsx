type TipProps = {
  tipPercent?: number;
};

const Tip = ({ tipPercent, handletip }: TipProps) => {
  // const active = { backgroundColor: "#26C2AE", color: "#00474B" };

  if (!tipPercent)
    return (
      <div
        className="bg-F3F9FA text-547878 rounded-md py-1.5 pl-5 text-2xl leading-9 font-bold md:px-3.5"
        // style={active}
        // onClick={handleTip()}
      >
        Custom
      </div>
    );

  return (
    <div
      onClick={() => handletip(tipPercent)}
      // style={active}
      className="bg-00474B rounded-md px-4 py-1.5 text-2xl leading-9 font-bold text-white"
    >
      {tipPercent}%
    </div>
  );
};

export default Tip;
