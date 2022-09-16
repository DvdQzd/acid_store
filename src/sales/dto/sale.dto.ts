import { ApiProperty } from '@nestjs/swagger';

export class SaleDto {

    @ApiProperty()
    buyerId: string;

    @ApiProperty()
    buyerName: string;
    
    @ApiProperty()
    buyerAddress: string;

    @ApiProperty({ type: [Number] })
    productIds: number[];

    @ApiProperty()
    paymentMethod: string;

    @ApiProperty()
    status: string;

    total?: number;
}
