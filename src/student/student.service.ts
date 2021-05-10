import { Injectable } from '@nestjs/common';
import { CreateStudentInput } from './create-student.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { studentEntity } from './student.entity';
import { v4 as uuid } from 'uuid';
import { LessonEntity } from '../lesson/lesson.entity';
@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(studentEntity)
    private studentRepository: Repository<studentEntity>,
  ) {}
  async createStudent(
    createstudentinput: CreateStudentInput,
  ): Promise<studentEntity> {
    const { firstName, lastName } = createstudentinput;
    const student = this.studentRepository.create({
      id: uuid(),
      firstName,
      lastName,
    });
    return this.studentRepository.save(student);
  }

  async getStudent(id): Promise<studentEntity> {
    return this.studentRepository.findOne({ id });
  }

  async getAllStudents(): Promise<studentEntity[]> {
    return this.studentRepository.find();
  }

  async getManyStudents(studentIds:string[]):Promise<studentEntity[]>{
    return this.studentRepository.find({
      where:{
        id:{
          $in:studentIds,
        }
      }
    })
  }
}
