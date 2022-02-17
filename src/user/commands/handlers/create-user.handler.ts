import { CommandHandler, ICommandHandler } from '@nestjs/cqrs'
import { CreateUserCommand } from '../create-user.command'
import { InjectRepository } from '@nestjs/typeorm'
import { User } from '../../entities/user.entity'
import { getRepository, Repository } from 'typeorm'
import { BadRequestException, HttpStatus } from '@nestjs/common'
import * as bcrypt from 'bcrypt'

@CommandHandler(CreateUserCommand)
export class CreateUserHandler implements ICommandHandler<CreateUserCommand> {
  constructor(
    @InjectRepository(User)
    private userRepo: Repository<User>,
  ) {
  }

  async execute(command: CreateUserCommand): Promise<any> {
    const { email, password, full_name } = command.createUserInput
    const qb = await getRepository(User)
      .createQueryBuilder('user')
      .orWhere('user.email = :email', { email })
    const userUnique = await qb.getOne()

    if (userUnique) {
      throw new BadRequestException({
        statusCode: HttpStatus.BAD_REQUEST,
        message: ['Account exists!'],
        error: 'Bad Request',
      });
    }

    const salt =  await bcrypt.genSalt()
    const passwordHash = await bcrypt.hash(password, salt);

    delete command.createUserInput.confirm_password

    return this.userRepo.save({
      email,
      password: passwordHash,
      is_active: 0,
      full_name
    })
  }
}
