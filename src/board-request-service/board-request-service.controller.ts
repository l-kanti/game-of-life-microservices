import {
  Controller,
  Get,
  Post,
  Body,
  Query,
  HttpStatus,
  HttpException,
} from '@nestjs/common';
import { BoardRequestService } from './board-request-service.service';
import {
  CreateBoardDto,
  GetBoardsDto,
  GetReplayDto,
  BoardsResponseDto,
  ReplayResponseDto,
} from './dto/board.dto';

@Controller('api')
export class BoardRequestController {
  constructor(private readonly boardRequestService: BoardRequestService) {}

  @Post('board')
  async createBoard(
    @Body() createBoardDto: CreateBoardDto,
  ): Promise<BoardsResponseDto> {
    try {
      return await this.boardRequestService.createBoard(createBoardDto.board);
    } catch (error) {
      throw new HttpException(
        'Internal server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get('board')
  async getBoards(@Query() getBoardsDto: GetBoardsDto): Promise<BoardsResponseDto> {
    try {
      return await this.boardRequestService.getBoards(
        getBoardsDto.gameId,
        getBoardsDto.ticks,
        getBoardsDto.last_tick,
      );
    } catch (error) {
      if (error.status === HttpStatus.FORBIDDEN) {
        throw error;
      }
      throw new HttpException(
        'Internal server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get('replays/board')
  async getReplay(@Query() getReplayDto: GetReplayDto): Promise<ReplayResponseDto> {
    try {
      return await this.boardRequestService.getReplay(getReplayDto.gameId);
    } catch (error) {
      if (error.status === HttpStatus.FORBIDDEN) {
        throw error;
      }
      throw new HttpException(
        'Internal server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
