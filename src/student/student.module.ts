import { Module } from '@nestjs/common';
import { StudentService } from './student.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { studentEntity } from './student.entity';
import { StudentResolver } from './student.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([studentEntity])],
  providers: [StudentService, StudentResolver],
  exports:[StudentService]
})
export class StudentModule {}
