interface Props {
  inputType: string;
  className?: string;
  error?: string;
  hint: string;
  type?: string;
  register: any;
}

const TextInput = ({
  inputType,
  className = "col-md mb-3",
  register,
  hint,
  type = "text",
  error,
}: Props) => {
  return (
    <div className={className}>
      {hint}
      <input
        {...register(inputType, { valueAsNumber: type === "number" })}
        id={inputType}
        type={type}
        className="form-control"
        aria-label={hint}
      />
      {error && <p className="text-danger">{error}</p>}
    </div>
  );
};

export default TextInput;
