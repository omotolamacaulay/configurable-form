import { Field } from "../types";
interface TimeFieldProps {
  field: Field;
  value: string;
  onChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}
const DropdownField = ({ field }: TimeFieldProps) => {
  return (
    <>
      <p>{field.description}</p>
      <select name={field.name} id={field.id}>
        {field.options &&
          field.options.map((option) => (
            <option key={option.id}>{option.label}</option>
          ))}
      </select>
    </>
  );
};

export default DropdownField;
