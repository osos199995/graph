import { Resolver, Query, Mutation, Args, ResolveField, Parent } from "@nestjs/graphql";
import { LessonType } from './lesson.type';
import { LessonService } from './lesson.service';
import { CreateLessonInput } from './lesson.input';
import { AssignStudentsToLessonInput } from './assign-students-to-lesson.input';
import { LessonEntity } from './lesson.entity';
import { StudentService } from '../student/student.service';

@Resolver((of) => LessonType)
export class LessonResolver {
  constructor(
    private lessonService: LessonService,
    private studentService: StudentService,
  ) {}
  @Query((returns) => LessonType)
  lesson(@Args('id') id: string) {
    return this.lessonService.getLesson(id);
  }
  @Query((returns) => [LessonType])
  getLesson() {
    return this.lessonService.getAllLesson();
  }
  @Mutation((returns) => LessonType)
  creationLesson(
    @Args('createlessonInput') createlessonInput: CreateLessonInput,
  ) {
    return this.lessonService.createLesson(createlessonInput);
  }
  @Mutation((returns) => LessonType)
  assignStudentToLesson(
    @Args('assignStudentsToLessonInput')
    assignStudentsToLessonInput: AssignStudentsToLessonInput,
  ) {
    const { lessonID, studentIds } = assignStudentsToLessonInput;
    return this.lessonService.assignStudentToLesson(lessonID, studentIds);
  }

  @ResolveField()
  async students(@Parent() lesson: LessonEntity) {
    return this.studentService.getManyStudents(lesson.students);
  }
}
