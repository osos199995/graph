import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { StudentService } from './student.service';
import { LessonType } from '../lesson/lesson.type';
import { CreateLessonInput } from '../lesson/lesson.input';
import { StudentType } from './student.type';
import { CreateStudentInput } from './create-student.input';

@Resolver()
export class StudentResolver {
  constructor(private studentservice: StudentService) {}
  @Mutation((returns) => StudentType)
  creationstudent(
    @Args('CreateStudentInput') createstudentinput: CreateStudentInput,
  ) {
    return this.studentservice.createStudent(createstudentinput);
  }

  @Query((returns) => [StudentType])
  getstudents() {
    return this.studentservice.getAllStudents();
  }

  @Query((returns) => StudentType)
  getStudent(@Args('id') id: string) {
    return this.studentservice.getStudent(id);
  }
}
