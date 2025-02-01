import { ChangeEvent } from "react";

type TipProps = {
  tipPercent?: number;
  handletip: (value: number) => void;
  handleActiveTip: (id: number) => void;
  isActive: boolean;
};

const Tip = ({
  tipPercent,
  handletip,
  handleActiveTip,
  isActive,
}: TipProps) => {
  const activeTip = { backgroundColor: "#26C2AE", color: "#00474B" };
  const activeCustom = {
    backgroundColor: "#f3f9fa",
    color: "#00474B",
    outline: "none",
    boxShadow: "inset 0 0 0 3px #26C2AE",
  };

  if (!tipPercent)
    return (
      <input
        className="bg-F3F9FA text-547878 cursor-pointer rounded-md py-1.5 pl-2 text-2xl leading-9 font-bold md:px-3.5"
        type="text"
        placeholder="Custom"
        style={isActive ? activeCustom : undefined}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          handletip(Number(e.target.value));
        }}
        onClick={() => handleActiveTip(100)}
      />
    );

  return (
    <button
      onClick={() => {
        handletip(tipPercent);
        handleActiveTip(tipPercent);
      }}
      style={isActive ? activeTip : undefined}
      className="bg-00474B cursor-pointer rounded-md px-4 py-1.5 text-2xl leading-9 font-bold text-white"
    >
      {tipPercent}%
    </button>
  );
};

export default Tip;
