import { InjectRepository } from "@nestjs/typeorm";
import { Injectable } from "@nestjs/common";
import { LessonEntity } from "./lesson.entity";
import { Repository } from "typeorm";
import {v4 as uuid} from 'uuid';

@Injectable()
export class LessonService {
  constructor(@InjectRepository(LessonEntity) private lessonRepository: Repository<LessonEntity>, ) {}


async createLesson(name,startDate,endDate):Promise<LessonEntity> {
  const lesson = this.lessonRepository.create({
    id:uuid(),
    name,
    startDate,
    endDate
  });
 return  this.lessonRepository.save(lesson);
}

}
