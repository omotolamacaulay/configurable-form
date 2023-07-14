import { Field } from "../types";
interface EmailFieldProps {
  field: Field;
  value: string;
  onChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}
const EmailField = ({ field, value, onChange }: EmailFieldProps) => {
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
        required
      />
    </label>
  );
};

export default EmailField;
