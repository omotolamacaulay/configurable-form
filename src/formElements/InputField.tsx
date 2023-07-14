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
        onChange={onChange}
      />
    </label>
  );
};

export default InputField;
