import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller()
export class AppController {
  constructor() {}

  game = {
    opponents: {
      p1: 'Roger Federer',
      p2: 'Rafael Nadal',
    },
    score : {
      previousSets: [{p1Games: 6, p2Games: 7}, {p1Games: 3, p2Games: 6}],
      currentSet: {p1Games: 0, p2Games: 1},
      currentGame: {p1Points: 0, p2Points: 1, serving: 1}
    }
  }

  @Get('game')
  getData() {
    return this.game;
  }

  @Post('score')
  postData(@Body() score) {
    this.game.score = score;
  }
}
