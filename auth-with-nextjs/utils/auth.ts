import { compareSync, hashSync } from "bcrypt";

export function hashPassword(password: string) {
  return hashSync(password, 12);
}

export function verifyPassword(password: string, hashedPassword: string) {
  return compareSync(password, hashedPassword);
}
