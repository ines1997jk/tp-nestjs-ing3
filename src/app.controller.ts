import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { AppService } from './app.service.js';

@Controller()
export class AppController {
  travelService: any;
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): {data: string} {
    return {data: "Planifier un voyage ici"};
  }

  @Get()
  findAll() { return this.travelService.findAll(); }

  @Get(":id")
  findOne(@Param("id", ParseIntPipe) id: number) {
  return this.travelService.findOne(id);
}

}