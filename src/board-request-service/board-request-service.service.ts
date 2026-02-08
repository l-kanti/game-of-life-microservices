import { Injectable, HttpException, HttpStatus, Inject, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';
import { BoardsResponseDto, ReplayResponseDto } from './board.dto';

interface BoardGrid {
  rows: Array<{ cells: boolean[] }>;
}

interface BoardRequestServiceGrpc {
  getBoards(data: {
    game_id: number;
    num_ticks: number;
    last_tick: number;
  }): Promise<{
    game_id: number;
    last_tick: number;
    boards: BoardGrid[];
  }>;

  getBoardsReplay(data: { game_id: number }): Promise<{
    boards: BoardGrid[];
  }>;

  createBoard(data: { board: BoardGrid }): Promise<{
    game_id: number;
    last_tick: number;
    boards: BoardGrid[];
  }>;
}

@Injectable()
export class BoardRequestService implements OnModuleInit {
  private boardComputeService: BoardRequestServiceGrpc;

  constructor(
    @Inject('BOARD_COMPUTE_PACKAGE') private client: ClientGrpc,
  ) {}

  onModuleInit() {
    this.boardComputeService = this.client.getService<BoardRequestServiceGrpc>(
      'BoardRequestService',
    );
  }

  async createBoard(board: boolean[][]): Promise<BoardsResponseDto> {
    try {
      const boardGrid = this.convertToProtoGrid(board);
      const response = await firstValueFrom(
        this.boardComputeService.createBoard({ board: boardGrid }),
      );

      return {
        gameId: response.game_id,
        lastTick: response.last_tick,
        boards: this.convertProtoGridsToArrays(response.boards),
      };
    } catch (error) {
      throw new HttpException(
        'Failed to create board',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async getBoards(
    gameId: number,
    ticks: number,
    lastTick: number,
  ): Promise<BoardsResponseDto> {
    try {
      const response = await firstValueFrom(
        this.boardComputeService.getBoards({
          game_id: gameId,
          num_ticks: ticks,
          last_tick: lastTick,
        }),
      );

      return {
        gameId: response.game_id,
        lastTick: response.last_tick,
        boards: this.convertProtoGridsToArrays(response.boards),
      };
    } catch (error) {
      throw new HttpException(
        'Failed to get boards',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async getReplay(gameId: number): Promise<ReplayResponseDto> {
    try {
      const response = await firstValueFrom(
        this.boardComputeService.getBoardsReplay({ game_id: gameId }),
      );

      return {
        replay: this.convertProtoGridsToArrays(response.boards),
      };
    } catch (error) {
      throw new HttpException(
        'Failed to get replay',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  private convertToProtoGrid(board: boolean[][]): BoardGrid {
    return {
      rows: board.map((row) => ({ cells: row })),
    };
  }

  private convertProtoGridsToArrays(grids: BoardGrid[]): boolean[][][] {
    return grids.map((grid) => grid.rows.map((row) => row.cells));
  }
}
