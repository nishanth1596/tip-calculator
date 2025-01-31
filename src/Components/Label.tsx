type LabelProps = {
  img: string;
  name: string;
};

const Label = ({ img, name }: LabelProps) => {
  return (
    <>
      <label
        className="text-5 text-5E7a7d block text-base leading-6 font-bold capitalize"
        htmlFor="bill"
      >
        {name}
      </label>
      <div className="relative flex items-center">
        <img src={img} alt="Dollar" className="absolute left-5 w-2.5" />
        <input
          className="bg-F3F9FA text-00474B w-full py-1.5 pr-[1.13rem] text-right text-2xl leading-9 font-bold"
          type="number"
          id="bill"
          defaultValue={142.55}
        />
      </div>
    </>
  );
};

export default Label;
