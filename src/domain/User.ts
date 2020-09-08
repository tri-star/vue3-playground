export class User {
  public name: string;
  public job: string;
  public age: number;

  constructor(name?: string, job?: string, age?: number) {
    this.name = name ?? ''
    this.job = job ?? ''
    this.age = age ?? 1
  }
}
