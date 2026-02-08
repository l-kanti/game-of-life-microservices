import { Injectable } from '@nestjs/common';
import { CreateBoardComputeServiceDto } from './dto/create-board-compute-service.dto';
import { UpdateBoardComputeServiceDto } from './dto/update-board-compute-service.dto';

@Injectable()
export class BoardComputeServiceService {
  create(createBoardComputeServiceDto: CreateBoardComputeServiceDto) {
    return 'This action adds a new boardComputeService';
  }

  findAll() {
    return `This action returns all boardComputeService`;
  }

  findOne(id: number) {
    return `This action returns a #${id} boardComputeService`;
  }

  update(id: number, updateBoardComputeServiceDto: UpdateBoardComputeServiceDto) {
    return `This action updates a #${id} boardComputeService`;
  }

  remove(id: number) {
    return `This action removes a #${id} boardComputeService`;
  }
}
