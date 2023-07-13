export interface Meta {
  name: string;
  description: string;
  version: string;
  url: string;
  status: "active" | "inactive";
}

export interface Action {
  type: string;
  label: string;
  message?: string;
}

export interface Validation {
  required: boolean;
  minimum?: string;
  maximum?: string;
  number_of_lines?: number;
  minimum_select?: number;
  decimal_points?: number;
  multi_select?: boolean;
  allowed?: string;
}

export interface Option {
  id: string;
  label: string;
  value: string;
}

export interface Field {
  id: string;
  name: string;
  type:
    | "short_text"
    | "long_text"
    | "date"
    | "time"
    | "date_time"
    | "integer"
    | "number"
    | "phone"
    | "email"
    | "checkbox"
    | "radio"
    | "label"
    | "dropdown"
    | "upload"
    | "audio"
    | "video"
    | "image";
  label: string;
  description: string;
  validation: Validation;
  options?: Option[];
}

export interface Section {
  name: string;
  description: string;
  fields: Field[];
}

export interface Page {
  name: string;
  title: string;
  description: string;
  actions: Action[];
  sections: Section[];
}

export interface FormData {
  meta: Meta;
  pages: Page[];
}
