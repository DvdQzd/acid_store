import { Controller, Get, Post, Body, Param, Delete, Patch, UseGuards } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from '../entities/product.entity';
import { ProductDto } from './dto/product.dto';
import { Public } from 'src/auth/decorators/public.decorator';
import { ApiBearerAuth } from '@nestjs/swagger';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { RolesGuard } from 'src/auth/guards/roles.guard';

@Controller('products')
@ApiBearerAuth('JWT')
@UseGuards(RolesGuard)
export class ProductsController {
    constructor(private readonly productsService: ProductsService) { }

    @Public()
    @Get()
    findAll(): Promise<Product[]> {
        return this.productsService.findAll();
    }

    @Public()
    @Get(':id')
    findOne(@Param('id') id: string): Promise<Product> {
        return this.productsService.findOne(id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() product: ProductDto): Promise<Product> {
        return this.productsService.update(id, product);
    }

    @Post()
    create(@Body() product: ProductDto): Promise<Product> {
        return this.productsService.create(product);
    }

    @Delete(':id')
    @Roles('admin')
    remove(@Param('id') id: string): Promise<void> {
        return this.productsService.remove(id);
    }
}
