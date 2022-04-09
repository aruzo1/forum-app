export interface IUser {
  id?: string;
  login?: string;
  createdAt?: string;
  avatarUrl?: string;
}

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

export interface IAuthContext {
  user?: null | IUser;
  register?: (data: IRegisterValues) => Promise<void>;
  login?: (data: ILoginValues) => Promise<void>;
}

export interface IModalsContext {
  modals: {
    login: boolean;
    register: boolean;
  };
  openModal?: (name: string) => void;
  closeModal?: (name: string) => void;
}

export interface IHomePageProps {
  threads: IThread[];
  categories: ICategory[];
}

export interface IRegisterValues {
  login: string;
  email: string;
  password: string;
}

export interface ILoginValues {
  email: string;
  password: string;
}

export interface IInput {
  label: string;
  placeholder: string;
  name: string;
  error?: string;
  touched?: boolean;
  type?: string;
  autoComplete?: string;
}
