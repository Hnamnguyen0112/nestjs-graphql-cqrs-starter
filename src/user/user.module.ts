import { Module } from '@nestjs/common'
import { UserResolver } from './user.resolver'
import { CqrsModule } from '@nestjs/cqrs'
import { TypeOrmModule } from '@nestjs/typeorm'
import { User } from './entities/user.entity'
import { CreateUserHandler } from './commands/handlers/create-user.handler'
import { GetAllUsersHandler } from './queries/handlers/get-all-users.handler'
import { UserCreatedHandler } from './events/handlers/user-created.handler'

export const CommandHandlers = [CreateUserHandler]
export const QueryHandlers = [GetAllUsersHandler]
export const EventHandlers = [UserCreatedHandler]

@Module({
  imports: [
    CqrsModule,
    TypeOrmModule.forFeature([User]),
  ],
  providers: [
    UserResolver,
    ...CommandHandlers,
    ...QueryHandlers,
    ...EventHandlers,
  ],
})
export class UserModule {
}
