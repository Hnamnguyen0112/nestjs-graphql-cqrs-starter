import { CommandHandler, ICommandHandler } from '@nestjs/cqrs'
import { CreateUserCommand } from '../create-user.command'
import { InjectRepository } from '@nestjs/typeorm'
import { User } from '../../entities/user.entity'
import { Repository } from 'typeorm'

@CommandHandler(CreateUserCommand)
export class CreateUserHandler implements ICommandHandler<CreateUserCommand> {
  constructor(
    @InjectRepository(User)
    private userRepo: Repository<User>,
  ) {
  }

  execute(command: CreateUserCommand): Promise<any> {
    return Promise.resolve(undefined)
  }
}
