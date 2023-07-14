import { Field } from "../types";
interface TimeFieldProps {
  field: Field;
  value: string;
  onChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}
const EmailField = ({ field, value, onChange }: TimeFieldProps) => {
  return (
    <label htmlFor={field.name}>
      {field.name}
      <p>{field.description}</p>
      <input
        type="email"
        id={field.id}
        name={field.id}
        value={value}
        onChange={onChange}
      />
    </label>
  );
};

export default EmailField;
