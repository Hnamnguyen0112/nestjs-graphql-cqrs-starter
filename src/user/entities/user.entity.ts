import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'
import { Field, ObjectType, ID } from '@nestjs/graphql'

@ObjectType()
@Entity({ name: 'users' })
export class User {
  @Field((type) => ID)
  @PrimaryGeneratedColumn()
  id: number

  @Field()
  @Column()
  full_name: string

  @Field()
  @Column()
  email: string

  @Field()
  @Column()
  password: string

  @Field()
  @Column()
  is_active: number

  @Field()
  @CreateDateColumn({ type: 'timestamp with time zone', select: false })
  created_at: string

  @Field()
  @UpdateDateColumn({ type: 'timestamp with time zone', select: false })
  updated_at: string

  @Field()
  @DeleteDateColumn({ type: 'timestamp with time zone', select: false })
  deleted_at?: string
}
