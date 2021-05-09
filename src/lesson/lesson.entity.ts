import { Column, Entity, ObjectID, ObjectIdColumn, PrimaryColumn } from "typeorm";

@Entity()
export class LessonEntity{
  @ObjectIdColumn()
  _id:string;

  @PrimaryColumn()
  id:string;

  @Column()
  name:string;


  @Column()
  startDate:string;

  @Column()
  endDate:string;

}