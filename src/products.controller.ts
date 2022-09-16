import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from './entities/product.entity';
import { ProductDto } from './dto/product.dto';

@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService) { }

    @Get()
    findAll(): Promise<Product[]> {
        return this.productsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string): Promise<Product> {
        return this.productsService.findOne(id);
    }

    @Post()
    create(@Body() product: ProductDto): Promise<Product> {
        return this.productsService.create(product);
    }

    @Delete(':id')
    remove(@Param('id') id: string): Promise<void> {
        return this.productsService.remove(id);
    }
}