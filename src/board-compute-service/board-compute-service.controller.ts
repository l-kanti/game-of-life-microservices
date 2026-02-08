import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { BoardComputeServiceService } from './board-compute-service.service';
import { CreateBoardComputeServiceDto } from './dto/create-board-compute-service.dto';
import { UpdateBoardComputeServiceDto } from './dto/update-board-compute-service.dto';

@Controller()
export class BoardComputeServiceController {
  constructor(private readonly boardComputeServiceService: BoardComputeServiceService) {}

  @MessagePattern('createBoardComputeService')
  create(@Payload() createBoardComputeServiceDto: CreateBoardComputeServiceDto) {
    return this.boardComputeServiceService.create(createBoardComputeServiceDto);
  }

  @MessagePattern('findAllBoardComputeService')
  findAll() {
    return this.boardComputeServiceService.findAll();
  }

  @MessagePattern('findOneBoardComputeService')
  findOne(@Payload() id: number) {
    return this.boardComputeServiceService.findOne(id);
  }

  @MessagePattern('updateBoardComputeService')
  update(@Payload() updateBoardComputeServiceDto: UpdateBoardComputeServiceDto) {
    return this.boardComputeServiceService.update(updateBoardComputeServiceDto.id, updateBoardComputeServiceDto);
  }

  @MessagePattern('removeBoardComputeService')
  remove(@Payload() id: number) {
    return this.boardComputeServiceService.remove(id);
  }
}
