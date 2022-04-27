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

// Pages
export interface IHomeProps {
  threads: IThread[];
  categories: ICategory[];
}
export interface IErrorProps {
  statusCode: number;
}
export interface IUserProps {
  user: IUser;
}
export interface IThreadProps {
  thread: IThread;
}
export interface IThreadCreateProps {
  subCategory: ISubCategory;
}
export interface ISubCategoryProps {
  subCategory: ISubCategory;
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
