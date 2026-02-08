import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BoardRequestServiceService } from './board-request-service.service';
import { CreateBoardRequestServiceDto } from './dto/create-board-request-service.dto';
import { UpdateBoardRequestServiceDto } from './dto/update-board-request-service.dto';

@Controller('board-request-service')
export class BoardRequestServiceController {
  constructor(private readonly boardRequestServiceService: BoardRequestServiceService) {}

  @Post()
  create(@Body() createBoardRequestServiceDto: CreateBoardRequestServiceDto) {
    return this.boardRequestServiceService.create(createBoardRequestServiceDto);
  }

  @Get()
  findAll() {
    return this.boardRequestServiceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.boardRequestServiceService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBoardRequestServiceDto: UpdateBoardRequestServiceDto) {
    return this.boardRequestServiceService.update(+id, updateBoardRequestServiceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.boardRequestServiceService.remove(+id);
  }
}
