import { Injectable } from '@nestjs/common';
import { CreateBoardRequestServiceDto } from './dto/create-board-request-service.dto';
import { UpdateBoardRequestServiceDto } from './dto/update-board-request-service.dto';

@Injectable()
export class BoardRequestServiceService {
  create(createBoardRequestServiceDto: CreateBoardRequestServiceDto) {
    return 'This action adds a new boardRequestService';
  }

  findAll() {
    return `This action returns all boardRequestService`;
  }

  findOne(id: number) {
    return `This action returns a #${id} boardRequestService`;
  }

  update(id: number, updateBoardRequestServiceDto: UpdateBoardRequestServiceDto) {
    return `This action updates a #${id} boardRequestService`;
  }

  remove(id: number) {
    return `This action removes a #${id} boardRequestService`;
  }
}
