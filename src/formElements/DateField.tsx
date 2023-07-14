import { Field } from "../types";
interface DateFieldProps {
  field: Field;
  value: string;
  onChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}
const DateField = ({ field, value, onChange }: DateFieldProps) => {
  const currentDate = new Date();
  const minDate = new Date();
  minDate.setFullYear(currentDate.getFullYear() - 100);

  const maxDate = new Date();
  maxDate.setFullYear(currentDate.getFullYear() - 10);

  return (
    <label htmlFor={field.id}>
      {field.name}
      <p>{field.description}</p>
      <input
        type="date"
        id={field.id}
        name={field.id}
        value={value}
        required
        min={minDate.toISOString().slice(0, 10)}
        max={maxDate.toISOString().slice(0, 10)}
        onChange={onChange}
      />
    </label>
  );
};

export default DateField;
