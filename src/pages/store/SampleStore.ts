import { computed, InjectionKey, reactive, readonly } from "vue";

export class SampleStore {
  private state: {
    id: number,
    department: {
      name: string
    },
    name: string
  }

  public constructor() {
    this.state = reactive({
      id: 0,
      department: {
        name: '',
      },
      name: ''
    })
  }

  public getState() {
    return this.state
  }

  public setName(newName: string) {
    this.state.name = newName
  }

  public getNameLength() {
    return computed(() => {
      return this.state.name.length
    }).value
  }

  public getDepartmentNameLength() {
    return computed(() => {
      return this.state.department.name.length
    }).value
  }

}

export const SampleStoreKey: InjectionKey<SampleStore> = Symbol('SampleStore');
