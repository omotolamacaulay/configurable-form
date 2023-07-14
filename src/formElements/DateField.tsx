import { Field } from "../types";
interface DateFieldProps {
  field: Field;
  value: string;
  onChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}
const DateField = ({ field, value, onChange }: DateFieldProps) => {
  return (
    <label htmlFor={field.id}>
      {field.name}
      <p>{field.description}</p>
      <input
        type="date"
        id={field.id}
        name={field.id}
        value={value}
        onChange={onChange}
      />
    </label>
  );
};

export default DateField;
