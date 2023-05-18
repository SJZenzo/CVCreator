import Textarea from "react-expanding-textarea";

interface Props {
  inputType: string;
  className?: string;
  error?: string;
  hint: string;
  defaultValue?: string | number | null;
  type?: string;
  register: any;
  expendableText?: boolean;
}

const TextInput = ({
  inputType,
  className = "col-md mb-3",
  register,
  hint,
  defaultValue = null,
  type = "text",
  error,
  expendableText = false,
}: Props) => {
  return (
    <div className={className}>
      {hint}
      {expendableText ? (
        <Textarea
          {...register(inputType, { valueAsNumber: type === "number" })}
          id={inputType}
          type={type}
          className="form-control"
          aria-label={hint}
          defaultValue={defaultValue}
        />
      ) : (
        <input
          {...register(inputType, { valueAsNumber: type === "number" })}
          id={inputType}
          type={type}
          className="form-control"
          aria-label={hint}
          defaultValue={defaultValue}
        />
      )}

      {error && <p className="text-danger">{error}</p>}
    </div>
  );
};

export default TextInput;
