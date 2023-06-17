import { PartialType } from '@nestjs/mapped-types';
import { CreateTrainingDto } from './create.training.dto';
import { IsOptional } from 'class-validator';

export class UpdateUserDto extends PartialType(CreateTrainingDto) {
  @IsOptional()
  title?: string;

  @IsOptional()
  description?: string;
}
