import { Dispatch, SetStateAction } from "react";

// Entities
export type IUser =
  | {
      id?: string;
      login?: string;
      createdAt?: string;
      avatarUrl?: string;
    }
  | undefined
  | null;
export interface ICategory {
  id?: string;
  name?: string;
  description?: string;
  subCategories?: ISubCategory[];
}
export interface ISubCategory {
  id?: string;
  name?: string;
  threads?: IThread[];
  threadsCount?: number;
}
export interface IThread {
  id?: string;
  title?: string;
  body?: string;
  createdAt?: string;
  user?: IUser;
}

// Contexts
export interface IAuthContext {
  user: IUser;
  setUser: Dispatch<SetStateAction<IUser>>;
  logout: () => void;
}
export interface IModalsContext {
  modals: { login: boolean; register: boolean };
  openModal: (name: string) => void;
  closeModal: (name: string) => void;
}

// Pages props
export interface IErrorPageProps {
  statusCode: number;
}
export interface IHomePageProps {
  threads: IThread[];
  categories: ICategory[];
}
export interface ISubCategoryPageProps {
  subCategory: ISubCategory;
}
export interface IThreadPageProps {
  thread: IThread;
}
export interface ICreateThreadPageProps {
  subCategory: ISubCategory;
}

// Forms values
export interface IRegisterValues {
  login: string;
  email: string;
  password: string;
}
export interface ILoginValues {
  email: string;
  password: string;
}

// Others
export interface IField {
  label: string;
  placeholder: string;
  name: string;
  error?: string;
  touched?: boolean;
  type?: string;
  autoComplete?: string;
  className?: string;
  as?: string;
}
