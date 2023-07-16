import type { Models } from "appwrite/types/models";

export type Project = {
  title: string;
  description: string;
  img?: string;
  tags?: string[];
} & Models.Document;

export type Experience = {
  title: string;
  company_name: string;
  start: string;
  is_current: boolean;
  end?: string;
  skills?: string[];
} & Models.Document;

export type Education = {
  degree_name: string;
  school_name: string;
  duration: string;
  description: string;
  img?: string;
} & Models.Document;
