import { Injectable } from '@nestjs/common';
import { CreateTravelDto } from './dto/create-travel.dto.js';
import { UpdateTravelDto } from './dto/update-travel.dto.js';

@Injectable()
export class TravelService {

  private trips =[
    {id: 1, destination: "To China", price: 9000},
    {id: 2, destination: "To Morocco", price: 2000},
    {id: 3, destination: "Tokyo", price: 3000},
  ] ;
  create(createTravelDto: CreateTravelDto) {
    return 'This action adds a new travel';
  }

  findAll() {
    return `This action returns all travel`;
  }

  findOne(id: number) {
    return `This action returns a #${id} travel`;
  }

  update(id: number, updateTravelDto: UpdateTravelDto) {
    return `This action updates a #${id} travel`;
  }

  remove(id: number) {
    return `This action removes a #${id} travel`;
  }
}
