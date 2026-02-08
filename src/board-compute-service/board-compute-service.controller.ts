import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { BoardComputeService } from './board-compute-service.service';

interface BoardGrid {
  rows: Array<{ cells: boolean[] }>;
}

interface GetBoardsRequest {
  game_id: number;
  num_ticks: number;
  last_tick: number;
}

interface GetBoardsResponse {
  game_id: number;
  last_tick: number;
  boards: BoardGrid[];
}

interface GetBoardsReplayRequest {
  game_id: number;
}

interface GetBoardsReplayResponse {
  boards: BoardGrid[];
}

interface CreateBoardRequest {
  board: BoardGrid;
}

interface CreateBoardResponse {
  game_id: number;
  last_tick: number;
  boards: BoardGrid[];
}

@Controller()
export class BoardComputeController {
  constructor(private readonly boardComputeService: BoardComputeService) {}

  @GrpcMethod('BoardRequestService', 'GetBoards')
  async getBoards(data: GetBoardsRequest): Promise<GetBoardsResponse> {
    return await this.boardComputeService.getBoards(
      data.game_id,
      data.num_ticks,
      data.last_tick,
    );
  }

  @GrpcMethod('BoardRequestService', 'GetBoardsReplay')
  async getBoardsReplay(
    data: GetBoardsReplayRequest,
  ): Promise<GetBoardsReplayResponse> {
    return await this.boardComputeService.getBoardsReplay(data.game_id);
  }

  @GrpcMethod('BoardRequestService', 'CreateBoard')
  async createBoard(data: CreateBoardRequest): Promise<CreateBoardResponse> {
    const board = data.board.rows.map((row) => row.cells);
    return await this.boardComputeService.createBoard(board);
  }
}
