import { Field, InputType, Int } from '@nestjs/graphql';
import { IsNumber, IsString, IsNotEmpty, isNumber } from 'class-validator';

@InputType()
class UserInput {
  @Field(() => Int, { nullable: true })
  @IsNotEmpty()
  id?: number;

  @Field(() => String, { nullable: true })
  email?: string;
}

export default UserInput;
