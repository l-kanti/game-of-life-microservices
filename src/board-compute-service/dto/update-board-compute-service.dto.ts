import { PartialType } from '@nestjs/mapped-types';
import { CreateBoardComputeServiceDto } from './create-board-compute-service.dto';

export class UpdateBoardComputeServiceDto extends PartialType(CreateBoardComputeServiceDto) {
  id: number;
}
