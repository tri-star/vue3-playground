import { App } from "vue";
import { UserAdapter, UserAdapterKey } from "./pages/form-provider/UserAdapter";

export class ServiceProvider {
  static boot(app: App): void {
    app.provide(UserAdapterKey, new UserAdapter())

  }
}
