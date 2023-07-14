import FormSection from "./formElements/TextAreaField";
import { Page } from "./types";

interface FormPageProps {
  page: Page;
}

const FormPage = ({ page }: FormPageProps) => {
  return (
    <div key={page.name}>
      <h2>{page.title}</h2>
      <p>{page.description}</p>
      {page.sections.map((section) => (
        <FormSection key={section.name} section={section} />
      ))}
      {page.actions.map((action) => (
        <button key={action.label} type="button">
          {action.label}
        </button>
      ))}
    </div>
  );
};

export default FormPage;
