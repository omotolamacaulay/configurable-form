import { Field } from "../types";
interface PhoneFieldProps {
  field: Field;
  value: string;
  onChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}
const PhoneField = ({ field, value, onChange }: PhoneFieldProps) => {
  return (
    <label htmlFor={field.name}>
      {field.name}
      <p>{field.description}</p>
      <input
        type="phone"
        id={field.id}
        name={field.id}
        value={value}
        onChange={onChange}
        required
      />
    </label>
  );
};

export default PhoneField;
