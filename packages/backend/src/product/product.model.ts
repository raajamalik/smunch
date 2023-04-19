import { Field, ObjectType } from '@nestjs/graphql';
import { BaseModel } from '../common/models/base.model';
import { Cuisine } from '../common/models/cuisine.model';
import { Photo } from '../common/models/photo.model';

@ObjectType()
export class Product extends BaseModel {
  @Field(() => String, { nullable: false })
  name: string;

  @Field(() => Number, { nullable: false })
  price: number;

  @Field(() => String, { nullable: false })
  description: string;

  @Field(() => Cuisine, { nullable: false })
  cuisine: Cuisine;

  // @Field(() => Restaurant, { nullable: false })
  // restaurantId: Restaurant | null;

  @Field(() => [Photo], { nullable: true })
  photos: Photo[];
}
