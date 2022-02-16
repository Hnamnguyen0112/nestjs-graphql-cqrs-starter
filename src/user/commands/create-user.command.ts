export class CreateUserCommand {
  constructor(
    public readonly full_name: string,
    public readonly email: string,
    public readonly password: string,
  ) {}
}