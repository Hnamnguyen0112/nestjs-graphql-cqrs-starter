import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { CreateUserInput } from './dto/create-user.input'
import { UpdateUserInput } from './dto/update-user.input'
import { CommandBus, QueryBus } from '@nestjs/cqrs'
import { User } from '../graphql.schema'
import { GetAllUsersQuery } from './queries/get-all-users.query'
import { CreateUserCommand } from './commands/create-user.command'

@Resolver('User')
export class UserResolver {
  constructor(private commandBus: CommandBus, private queryBus: QueryBus) {
  }

  @Mutation('createUser')
  async create(@Args('createUserInput') createUserInput: CreateUserInput): Promise<User> {
    return this.commandBus.execute(new CreateUserCommand(createUserInput))
  }

  @Query('users')
  async findAll(): Promise<User[]> {
    return this.queryBus.execute(new GetAllUsersQuery())
  }

  @Query('user')
  findOne(@Args('id') id: number) {
  }

  @Mutation('updateUser')
  update(@Args('updateUserInput') updateUserInput: UpdateUserInput) {
  }

  @Mutation('removeUser')
  remove(@Args('id') id: number) {
  }
}
