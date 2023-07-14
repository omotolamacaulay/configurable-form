import { Field } from "../types";
interface TimeFieldProps {
  field: Field;
  value: string;
  onChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}
const UploadField = ({ field, value, onChange }: TimeFieldProps) => {
  return (
    <label htmlFor={field.name}>
      {field.name}
      <p>{field.description}</p>
      <input
        type="file"
        id={field.id}
        name={field.id}
        accept=".doc, .docx, .png, .pdf, .jpg, .jpeg, .tiff"
        value={value}
        onChange={onChange}
      />
    </label>
  );
};

export default UploadField;
