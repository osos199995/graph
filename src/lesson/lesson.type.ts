import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Resolver, Query } from '@nestjs/graphql';
import { StudentType } from '../student/student.type';
import { IsUUID } from "class-validator";

@ObjectType()
export class LessonType {
  @Field((type) => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  startDate: string;

  @Field()
  endDate: string;
  @IsUUID('4', { each: true })
  @Field((type) => [StudentType])
  students: string[];
}
