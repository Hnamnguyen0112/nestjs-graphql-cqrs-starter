import { IsEmail, IsNotEmpty, IsString, Matches, MaxLength, MinLength } from 'class-validator'
import { Match } from '../../decorators/match.decorator'

export class CreateUserInput {
  @IsEmail()
  email: string

  @IsNotEmpty()
  full_name: string

  @IsNotEmpty()
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, { message: 'password too weak' })
  password: string

  @IsNotEmpty()
  @Match('password')
  confirm_password: string

}
