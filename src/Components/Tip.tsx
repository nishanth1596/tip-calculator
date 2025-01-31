type TipProps = {
  tipPercent?: number;
};

const Tip = ({ tipPercent }: TipProps) => {
  if (!tipPercent) return <div>Custom</div>;

  return <div>{tipPercent}%</div>;
};

export default Tip;
