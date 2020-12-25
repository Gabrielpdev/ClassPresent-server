import { compare, hash } from 'bcryptjs';

import { IHashProvider } from '../IHashProvider';



export default class UsersRepository implements IHashProvider {
  public async generate(payload: string): Promise<string> {
    return hash(payload, 8);
  }

  public async compare(payload: string, hashed: string): Promise<boolean> {
    return compare(payload, hashed);
  }
}