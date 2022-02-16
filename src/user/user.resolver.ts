import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { CreateUserInput } from './dto/create-user.input'
import { UpdateUserInput } from './dto/update-user.input'
import { CommandBus, QueryBus } from '@nestjs/cqrs'

@Resolver('User')
export class UserResolver {
  constructor(private commandBus: CommandBus, private queryBus: QueryBus) {
  }

  @Mutation('createUser')
  create(@Args('createUserInput') createUserInput: CreateUserInput) {
  }

  @Query('user')
  findAll() {
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
