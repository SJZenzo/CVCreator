import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, useForm } from "react-hook-form";

const shema = z.object({
  description: z
    .string()
    .min(3, { message: "Description must be at least 3 charakters" }),
  amount: z.number({ invalid_type_error: "Amount field is required" }).min(18),
  category: z.string().min(1, { message: "Category is required" }),
});

type FormData = z.infer<typeof shema>;

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(shema) });

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input
          {...register("description")}
          id="description "
          type="text"
          className="form-control"
        />
        {errors.description && (
          <p className="text-danger">{errors.description.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="amount" className="form-label">
          Amount
        </label>
        <input
          {...register("amount", { valueAsNumber: true })}
          id="amount "
          type="number"
          className="form-control"
        />
        {errors.amount && (
          <p className="text-danger">{errors.amount.message}</p>
        )}
      </div>

      <div className="mb-3">
        <div>
          <label htmlFor="category" className="form-label">
            Category
          </label>
        </div>
        <select className="form-select" id="category" {...register("category")}>
          <option></option>
          <option value="Groceries">Groceries</option>
          <option value="Utilites">Utilites</option>
          <option value="Enterteinment">Enterteinment</option>
        </select>
        {errors.category && (
          <p className="text-danger">{errors.category.message}</p>
        )}
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
