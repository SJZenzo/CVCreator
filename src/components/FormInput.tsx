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
  className = "col",
  register,
  hint,
  type = "text",
  error,
}: Props) => {
  return (
    <div className={className}>
      <input
        {...register(inputType)}
        id={inputType}
        type={type}
        className="form-control"
        placeholder={hint}
        aria-label={hint}
      />
      {error && <p className="text-danger">{error}</p>}
    </div>
  );
};

export default TextInput;
