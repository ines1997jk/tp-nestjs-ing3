import { IsNumber, IsPositive, IsString } from "class-validator";




export class CreateTravelDto {
    @IsNumber()
    id: number;

    @IsString()
    destination: string;

    @IsNumber()
    @IsPositive()
    price: number;

}


