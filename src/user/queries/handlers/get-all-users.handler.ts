import { GetAllUsersQuery } from '../get-all-users.query'
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs'
import { InjectRepository } from '@nestjs/typeorm'
import { User } from '../../entities/user.entity'
import { Repository } from 'typeorm'

@QueryHandler(GetAllUsersQuery)
export class GetAllUsersHandler implements IQueryHandler<GetAllUsersQuery> {
  constructor(
    @InjectRepository(User)
    private userRepo: Repository<User>,
  ) {
  }

  async execute(query: GetAllUsersQuery): Promise<User[]> {
    return this.userRepo.find()
  }
}
