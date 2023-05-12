interface Props {
  inputType: string;
  className?: string;
  error?: string;
  hint: string;
  defaultValue?: string | number | null;
  type?: string;
  register: any;
}

const TextInput = ({
  inputType,
  className = "col-md mb-3",
  register,
  hint,
  defaultValue = null,
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
        defaultValue={defaultValue}
      />
      {error && <p className="text-danger">{error}</p>}
    </div>
  );
};

export default TextInput;
