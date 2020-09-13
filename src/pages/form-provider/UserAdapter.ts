import { User } from "@/domain/User";
import { InjectionKey } from "vue";

export class UserAdapter
{
  async findById(id: number): Promise<User> {
    const user = new User()
    user.name = 'ロードされたユーザー'
    return user
  }
}

export const UserAdapterKey: InjectionKey<UserAdapter> = Symbol('UserAdapter');
