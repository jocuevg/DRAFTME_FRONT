import bcrypt from "bcryptjs";

export async function hashPassword(password: string): Promise<string> {
  const saltRounds = 10; // número de rondas, más alto = más seguro pero más lento
  const hashed = await bcrypt.hash(password, saltRounds);
  return hashed;
}

export async function verifyPassword(password: string, hash: string): Promise<boolean> {
  return await bcrypt.compare(password, hash);
}

