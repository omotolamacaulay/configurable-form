import { useState } from "react";
import { FormData } from "./types";
import InputField from "./formElements/InputField";
import TextAreaField from "./formElements/TextAreaField";
import DateField from "./formElements/DateField";
import TimeField from "./formElements/TimeField";
import NumberField from "./formElements/NumberField";
import PhoneField from "./formElements/PhoneField";
import EmailField from "./formElements/EmailField";
import CheckboxField from "./formElements/CheckboxField";
import RadioField from "./formElements/RadioField";
import AudioField from "./formElements/AudioField";
import VideoField from "./formElements/VideoField";
import ImageField from "./formElements/ImageField";
import UploadField from "./formElements/UploadField";
import DropdownField from "./formElements/DropdownField";

const ConfigForm = () => {
  const [urlLink, setUrlLink] = useState<string>("");
  const [jsonData, setJsonData] = useState("");
  const [form, setForm] = useState({} as FormData);
  const [formValues, setFormValues] = useState<Record<string, string>>({});

  const jsonObj = {
    audio_attestation: "",
    date_of_birth: "",
    document_options: "",
    drink_options: "",
    email: "",
    food_options: "",
    identity_document: "",
    name_of_student: "Sola Sola",
    number_of_siblins: "",
    phone_number: "0807865432",
    reason_for_loan: "",
    resumption_date: "",
    salary_of_dad: "",
    student_selfie: "",
    time_of_day: "",
    video_attestation: "",
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  async function getUrl() {
    const res = await fetch(urlLink);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const data: FormData = await res.json();
    setForm(data);
  }

  const getJsonData = function () {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const data: FormData = JSON.parse(jsonData);
    setForm(data);
    fillTheForm(data);
  };

  const fillTheForm = function (data: FormData) {
    const dataObject: Record<string, unknown> = {};
    data.pages.map((page) => {
      page.sections.map((section) => {
        section.fields.map((field) => {
          dataObject[field.id] = "";
        });
      });
    });
  };

  const handleSubmit = () => {
    const newErrors: Record<string, string> = {};

    form?.pages.forEach((page) => {
      page.sections.forEach((section) => {
        section.fields.forEach((field) => {
          const value = formValues[field.id];

          if (field.validation.required && !value) {
            newErrors[field.id] = "This field is required.";
          }

          if (
            field.validation.minimum &&
            value &&
            value.length < Number(field.validation.minimum)
          ) {
            newErrors[
              field.id
            ] = `Minimum length is ${field.validation.minimum}.`;
          }

          if (
            field.validation.maximum &&
            value &&
            value.length > Number(field.validation.maximum)
          ) {
            newErrors[
              field.id
            ] = `Maximum length is ${field.validation.maximum}.`;
          }
        });
      });
    });
  };
  return (
    <>
      <h1>Configurable Form</h1>
      <h3>
        Customize your template form. Insert your URL in the input bar or drop
        your JSON data in the textarea. Click Submit to continue
      </h3>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!urlLink) {
            getJsonData();
          } else {
            void getUrl();
          }
        }}
      >
        <label htmlFor="urlLink">
          <input
            type="text"
            id="urlLink"
            value={urlLink}
            placeholder="UrlLink"
            onChange={(e) => {
              setUrlLink(e.target.value);
            }}
          />
        </label>
        <p>or</p>
        <textarea
          name=""
          id="jsonData"
          //   value={jsonData}
          onChange={(e) => {
            setJsonData(e.target.value);
          }}
        ></textarea>
        <button>Submit</button>
      </form>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <button
          onClick={() => {
            setFormValues(jsonObj);
          }}
        >
          fill form
        </button>
        {Object.keys(form).length === 0 ? (
          <h2>No fetch</h2>
        ) : (
          form.pages.map((page) => (
            <div key={page.name}>
              <h2>{page.title}</h2>
              <p>{page.description}</p>
              {page.sections.map((section) => (
                <div key={section.name}>
                  <h3>{section.name}</h3>
                  <p>{section.description}</p>
                  {section.fields.map((field) => (
                    <div key={field.id}>
                      {field.type === "short_text" && (
                        <InputField
                          field={field}
                          value={formValues[field.id] || ""}
                          onChange={handleChange}
                        />
                      )}
                      {field.type === "long_text" && (
                        <TextAreaField
                          field={field}
                          value={formValues[field.id] || ""}
                          onChange={handleChange}
                        />
                      )}
                      {field.type === "date" && (
                        <DateField
                          field={field}
                          value={formValues[field.id] || ""}
                          onChange={handleChange}
                        />
                      )}
                      {field.type === "date_time" && (
                        <DateField
                          field={field}
                          value={formValues[field.id] || ""}
                          onChange={handleChange}
                        />
                      )}
                      {field.type === "time" && (
                        <TimeField
                          field={field}
                          value={formValues[field.id] || ""}
                          onChange={handleChange}
                        />
                      )}
                      {field.type === "number" && (
                        <NumberField
                          field={field}
                          value={formValues[field.id] || ""}
                          onChange={handleChange}
                        />
                      )}
                      {field.type === "integer" && (
                        <NumberField
                          field={field}
                          value={formValues[field.id] || ""}
                          onChange={handleChange}
                        />
                      )}
                      {field.type === "phone" && (
                        <PhoneField
                          field={field}
                          value={formValues[field.id] || ""}
                          onChange={handleChange}
                        />
                      )}
                      {field.type === "email" && (
                        <EmailField
                          field={field}
                          value={formValues[field.id] || ""}
                          onChange={handleChange}
                        />
                      )}
                      {field.type === "label" && (
                        <InputField
                          field={field}
                          value={formValues[field.id] || ""}
                          onChange={handleChange}
                        />
                      )}
                      {field.type === "checkbox" && (
                        <CheckboxField
                          field={field}
                          value={formValues[field.id] || ""}
                          onChange={handleChange}
                        />
                      )}
                      {field.type === "radio" && (
                        <RadioField
                          field={field}
                          value={formValues[field.id] || ""}
                          onChange={handleChange}
                        />
                      )}
                      {field.type === "audio" && (
                        <AudioField
                          field={field}
                          value={formValues[field.id] || ""}
                          onChange={handleChange}
                        />
                      )}
                      {field.type === "video" && (
                        <VideoField
                          field={field}
                          value={formValues[field.id] || ""}
                          onChange={handleChange}
                        />
                      )}
                      {field.type === "image" && (
                        <ImageField
                          field={field}
                          value={formValues[field.id] || ""}
                          onChange={handleChange}
                        />
                      )}
                      {field.type === "upload" && (
                        <UploadField
                          field={field}
                          value={formValues[field.id] || ""}
                          onChange={handleChange}
                        />
                      )}
                      {field.type === "dropdown" && (
                        <DropdownField
                          field={field}
                          value={formValues[field.id] || ""}
                          onChange={handleChange}
                        />
                      )}
                    </div>
                  ))}
                </div>
              ))}
              {page.actions.map((action) => (
                <button key={action.label} type="button">
                  {action.label}
                </button>
              ))}
            </div>
          ))
        )}
      </form>
    </>
  );
};

export default ConfigForm;
