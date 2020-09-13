import { reactive, inject, InjectionKey } from "vue";
import { User } from "@/domain/User";
import { UserAdapter, UserAdapterKey } from "./UserAdapter";

export default function userFormStore() {
  const user = reactive(new User)
  
  const userAdapter = inject<UserAdapter>(UserAdapterKey);
  const loadUser = async () => {
    const u = await userAdapter?.findById(1)
    if(!u) {
      throw new Error('ロード失敗')
    }
    user.name = u.name
  }

  return {
    user,
    loadUser
  }
}

export type userFormStoreType = ReturnType<typeof userFormStore>;
export const userFormStoreKey: InjectionKey<userFormStoreType> = Symbol('userFormStore');


export const useUserFormStore = () => {
  const store = inject<userFormStoreType>(userFormStoreKey)
  if(!store) {
    throw new Error('Provideされていません: ' + userFormStoreKey);
  }
  return store;
}
