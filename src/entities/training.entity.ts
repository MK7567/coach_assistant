import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('trainings')
export class Training {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;
}
