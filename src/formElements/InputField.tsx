import { Field } from "../types";
interface InputFieldProps {
  field: Field;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
const InputField = ({ field, value, onChange }: InputFieldProps) => {
  return (
    <label htmlFor={field.id}>
      {field.name}
      <p>{field.description}</p>
      <input
        type="text"
        id={field.id}
        name={field.id}
        value={value}
        required
        minLength={10}
        maxLength={256}
        onChange={onChange}
      />
    </label>
  );
};

export default InputField;
