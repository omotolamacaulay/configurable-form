import { Field } from "../types";
interface TimeFieldProps {
  field: Field;
  value: string;
  onChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}
const VideoField = ({ field, value, onChange }: TimeFieldProps) => {
  return (
    <label htmlFor={field.name}>
      {field.name}
      <p>{field.description}</p>
      <input
        type="file"
        id={field.id}
        name={field.id}
        accept="video/*"
        value={value}
        required
        onChange={onChange}
      />
    </label>
  );
};

export default VideoField;
