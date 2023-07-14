import { Field } from "../types";
interface TimeFieldProps {
  field: Field;
  value: string;
  onChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}
const TimeField = ({ field, value, onChange }: TimeFieldProps) => {
  // const getCurrentTime = () => {
  //   const now = new Date();
  //   const hours = now.getHours().toString().padStart(2, '0');
  //   const minutes = now.getMinutes().toString().padStart(2, '0');
  //   return `${hours}:${minutes}`;
  // };

  const getMinTime = () => {
    const now = new Date();
    const minTime = new Date(now.getTime() + 5 * 60000);
    const hours = minTime.getHours().toString().padStart(2, "0");
    const minutes = minTime.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  };

  const getMaxTime = () => {
    const now = new Date();
    const maxTime = new Date(now.getTime() + 12 * 60 * 60000);
    const hours = maxTime.getHours().toString().padStart(2, "0");
    const minutes = maxTime.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  };
  return (
    <label htmlFor={field.name}>
      {field.name}
      <p>{field.description}</p>
      <input
        type="time"
        id={field.id}
        name={field.id}
        value={value}
        min={getMinTime()}
        max={getMaxTime()}
        onChange={onChange}
      />
    </label>
  );
};

export default TimeField;
