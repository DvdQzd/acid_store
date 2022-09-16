import { ApiProperty } from '@nestjs/swagger';

export class SaleDto {
    @ApiProperty()
    buyerDni: string;

    @ApiProperty()
    buyerName: string;

    @ApiProperty()
    buyerEmail: string;
    
    @ApiProperty()
    buyerAddress: string;

    @ApiProperty({ type: [Number] })
    productIds: number[];

    @ApiProperty()
    paymentMethod: string;

    total?: number;
}
