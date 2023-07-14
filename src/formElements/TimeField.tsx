import { Field } from "../types";
interface TimeFieldProps {
  field: Field;
  value: string;
  onChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}
const TimeField = ({ field, value, onChange }: TimeFieldProps) => {
  return (
    <label htmlFor={field.name}>
      {field.name}
      <p>{field.description}</p>
      <input
        type="time"
        id={field.id}
        name={field.id}
        value={value}
        onChange={onChange}
      />
    </label>
  );
};

export default TimeField;
