import { Controller, Get } from '@nestjs/common';
import { TrainingService } from './training.service';
import { Training } from '../entities/training.entity';

@Controller('training')
export class TrainingController {
  constructor(private readonly trainingService: TrainingService) {}

  @Get()
  findAll(): Promise<Training[]> {
    return this.trainingService.findAll();
  }
}
