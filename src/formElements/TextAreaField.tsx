import { Field } from "../types";
interface TextareaFieldProps {
  field: Field;
  value: string;
  onChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}
const TextAreaField = ({ field, value, onChange }: TextareaFieldProps) => {
  return (
    <label htmlFor={field.id}>
      {field.name}
      <p>{field.description}</p>
      <textarea
        id={field.id}
        name={field.id}
        value={value}
        minLength={10}
        maxLength={1000}
        required
        onChange={onChange}
      />
    </label>
  );
};

export default TextAreaField;
