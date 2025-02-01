import { ChangeEvent, FormEvent } from "react";

type LabelProps = {
  img: string;
  name: string;
  id: string;
  setBill?: React.Dispatch<React.SetStateAction<number | null | undefined>>;
  setNumPpl?: React.Dispatch<React.SetStateAction<number | null>>;
  inputValue: number | null | undefined;
};

const Label = ({
  img,
  name,
  id,
  setBill,
  setNumPpl,
  inputValue,
}: LabelProps) => {
  function handleChange(e: ChangeEvent<HTMLInputElement>): void {
    if (id === "bill" && setBill) {
      setBill(Number(e.target.value));
    }

    if (id === "numberOfPeople" && setNumPpl) {
      setNumPpl(Number(e.target.value));
    }
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <label
        htmlFor={name}
        className="text-5 text-5E7a7d block text-base leading-6 font-bold capitalize"
      >
        {name}
      </label>
      <div className="relative flex items-center">
        <img src={img} alt="Dollar" className="absolute left-5 w-2.5" />
        <input
          className="bg-F3F9FA text-00474B focus:border-26C2AE w-full rounded-md py-1.5 pr-[1.13rem] text-right text-2xl leading-9 font-bold focus:border-2 focus:outline-none"
          type="number"
          id={id}
          value={inputValue || ""}
          onChange={handleChange}
        />
      </div>
    </form>
  );
};

export default Label;
