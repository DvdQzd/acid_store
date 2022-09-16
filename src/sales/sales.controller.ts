import { Controller, Get, Post, Body, Param, Delete, Patch, Req, UseGuards } from '@nestjs/common';
import { SalesService } from './sales.service';
import { Sale } from 'src/entities/sale.entity';
import { SaleDto } from './dto/sale.dto';
import { ProductsService } from 'src/products/products.service';
import { Public } from 'src/auth/decorators/public.decorator';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { RolesGuard } from 'src/auth/roles.guard';
import { ApiBearerAuth } from '@nestjs/swagger';

@Controller('sales')
@ApiBearerAuth('JWT')
@UseGuards(RolesGuard)
export class SalesController {
    constructor(
        private readonly salesService: SalesService,
        private readonly productsService: ProductsService
    ) { }

    @Get()
    findAll(): Promise<Sale[]> {
        return this.salesService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string): Promise<Sale> {
        return this.salesService.findOne(id);
    }

    @Public()
    @Post()
    async create(@Body() sale: SaleDto): Promise<Sale> {
        sale.total = await this.productsService.getTotalPriceFromProductIds(sale.productIds);
        return this.salesService.create(sale);
    }

    @Patch(':id')
    async update(@Param('id') id: string, @Body() sale: SaleDto): Promise<Sale> {
        sale.total = await this.productsService.getTotalPriceFromProductIds(sale.productIds);
        return this.salesService.update(id, sale);
    }

    @Delete(':id')
    @Roles('admin')
    remove(@Param('id') id: string): Promise<void> {
        return this.salesService.remove(id);
    }
}
