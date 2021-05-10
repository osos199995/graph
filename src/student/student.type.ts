import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Resolver, Query } from '@nestjs/graphql';

@ObjectType('Student')
export class StudentType {
  @Field((type) => ID)
  id: string;

  @Field()
  firstName: string;

  @Field()
  lastName: string;


}