import { Field, ObjectType, ID } from '@nestjs/graphql';

/**
 * All the models in the application must extend this base model. This base model
 * contains the common fields that are used in all the models.
 *
 * Common Values are `id`, `createdAt`, `updatedAt`
 */
@ObjectType({ isAbstract: true })
export abstract class BaseModel {
  @Field(() => ID)
  id: number;

  @Field({
    description: 'Identifies the date and time when the object was created.',
  })
  createdAt: Date;

  @Field({
    description:
      'Identifies the date and time when the object was last updated.',
  })
  updatedAt: Date;
}
