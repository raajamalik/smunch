import { Field, InputType } from '@nestjs/graphql';
import { IsString, IsNumber } from 'class-validator';

@InputType()
export class SearchInput {
  @Field(() => String, { nullable: true })
  @IsString()
  name?: string = '';

  @Field(() => Number, { nullable: true })
  @IsNumber()
  cuisine?: number;
}
