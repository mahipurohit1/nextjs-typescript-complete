import { ReactNode } from "react";

export interface LayoutProps {
  children: ReactNode;
}

export interface ChangePasswordParams {
  oldPassword: string;
  newPassword: string;
}

export interface ProfileFormProps {
  changePassword: ({ oldPassword, newPassword }: ChangePasswordParams) => void;
}

export interface RequestBody {
  [key: string]: string | undefined;
}
