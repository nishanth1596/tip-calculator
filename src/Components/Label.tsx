type LabelProps = {
  img: string;
  name: string;
  id: string;
};

const Label = ({
  img,
  name,
  id,
  setBill,
  setNumPpl,
  inputValue,
}: LabelProps) => {
  function handleChange(e) {
    if (id === "bill") {
      setBill(Number(e.target.value));
    }

    if (id === "numberOfPeople") {
      setNumPpl(Number(e.target.value));
    }
  }

  function handleSubmit(e) {
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
          className="bg-F3F9FA text-00474B w-full py-1.5 pr-[1.13rem] text-right text-2xl leading-9 font-bold"
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
