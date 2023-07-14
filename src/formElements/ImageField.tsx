import { Field } from "../types";
interface ImageFieldProps {
  field: Field;
  value: string;
  onChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}
const ImageField = ({ field, value, onChange }: ImageFieldProps) => {
  return (
    <label htmlFor={field.name}>
      {field.name}
      <p>{field.description}</p>
      <input
        type="file"
        id={field.id}
        name={field.id}
        accept="image/*"
        value={value}
        required
        onChange={onChange}
      />
    </label>
  );
};

export default ImageField;
