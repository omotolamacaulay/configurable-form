import { Field } from "../types";
interface IntegerFieldProps {
  field: Field;
  value: string;
  onChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}
const IntegerField = ({ field, value, onChange }: IntegerFieldProps) => {
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
        required
        min={0}
        max={10}
      />
    </label>
  );
};

export default IntegerField;
