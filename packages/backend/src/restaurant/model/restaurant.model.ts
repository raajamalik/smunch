import { Field, Float, ObjectType } from '@nestjs/graphql';
import { BaseModel } from '../../common/models/base.model';
import { IsString, IsArray, IsNumber } from 'class-validator';
import Address from '../../common/models/address.model';
import { Cuisine } from '../../common/models/cuisine.model';
import { Photo } from '../../common/models/photo.model';
import { Product } from '../../product/product.model';
import { Review } from '../../review/model/review.model';

@ObjectType()
class Restaurant extends BaseModel {
  constructor() {
    super();
  }

  @Field(() => String, { nullable: false })
  @IsString()
  name: string;

  @Field(() => [Address], { nullable: false })
  addresses: Address[];

  @Field(() => Float, { nullable: false })
  @IsNumber()
  latitude: number;

  @Field(() => Float, { nullable: false })
  @IsNumber()
  longitude: number;

  @Field(() => [Photo], { nullable: true })
  @IsArray()
  photos: Photo[];

  @Field(() => Cuisine, { nullable: false })
  cuisine: Cuisine;

  @Field(() => [Product], { nullable: true })
  @IsArray()
  products: Product[];

  @Field(() => [Review], { nullable: true })
  reviews: Review[];
}

export default Restaurant;
