import { Injectable } from '@nestjs/common';
import { CreateTravelDto } from './dto/create-travel.dto.js';
import { UpdateTravelDto } from './dto/update-travel.dto.js';
import { Travel } from './entities/travel.entity.js';

@Injectable()
export class TravelService {

  private trips : Travel[] =[
    {id: 1, destination: "To China", price: 9000},
    {id: 2, destination: "To Morocco", price: 4000},
  ] ;
  private nextId = 3;

   create(createTravelDto: CreateTravelDto) {
    const trip : Travel ={
      id: this.trips.length +1,
      destination: createTravelDto.destination,
      price: createTravelDto.price,
    };
    this.trips.push(trip);
    return trip;
  }

  findAll() : Travel[] {
    return this.trips;
  }

  findOne(id: number) : Travel {
    const trip = this.trips.find((trip) => trip.id === id);
    if (!trip) {
      throw new Error(`Trip with id ${id} not found`);
    }
    return trip;
  }

  update(id: number, updateTravelDto: UpdateTravelDto) {
    return `This action updates a #${id} travel`;
  }

  remove(id: number) {
    return `This action removes a #${id} travel`;
  }
}
