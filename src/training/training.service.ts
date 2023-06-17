import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Training } from '../entities/training.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TrainingService {
  constructor(
    @InjectRepository(Training)
    private readonly trainingrepository: Repository<Training>,
  ) {}

  async findAll(): Promise<Training[]> {
    return await this.trainingrepository.find();
  }

  async findOne(id: number): Promise<Training> {
    return await this.trainingrepository.findOne({
      where: { id },
      relations: ['Training'],
    });
  }
}
