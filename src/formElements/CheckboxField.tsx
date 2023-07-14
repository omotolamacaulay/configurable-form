import { Field } from "../types";
interface TimeFieldProps {
  field: Field;
  value: string;
  onChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}
const CheckboxField = ({ field, value, onChange }: TimeFieldProps) => {
  return (
    <>
      <p>{field.description}</p>
      {field.options &&
        field.options.map((option) => (
          <div key={option.id}>
            <label htmlFor={option.id}>{option.label}</label>
            <input
              type="checkbox"
              id={option.id}
              name={option.id}
              value={value}
              onChange={onChange}
            />
          </div>
        ))}
    </>
  );
};

export default CheckboxField;
