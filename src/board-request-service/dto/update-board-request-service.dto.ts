import { PartialType } from '@nestjs/mapped-types';
import { CreateBoardRequestServiceDto } from './create-board-request-service.dto';

export class UpdateBoardRequestServiceDto extends PartialType(CreateBoardRequestServiceDto) {}
