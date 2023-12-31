import { Field } from "../types";
interface NumberFieldProps {
  field: Field;
  value: string;
  onChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}
const NumberField = ({ field, value, onChange }: NumberFieldProps) => {
  return (
    <label htmlFor={field.name}>
      {field.name}
      <p>{field.description}</p>
      <input
        type="number"
        id={field.id}
        name={field.id}
        value={value}
        onChange={onChange}
        step="0.01"
        min="0"
        max="0.99"
      />
    </label>
  );
};

export default NumberField;
