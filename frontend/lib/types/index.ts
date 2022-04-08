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
