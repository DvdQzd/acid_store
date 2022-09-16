import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from 'src/entities/product.entity';
import { Sale } from 'src/entities/sale.entity';
import { ProductsService } from 'src/products/products.service';
import { SalesController } from './sales.controller';
import { SalesService } from './sales.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Sale]),
    TypeOrmModule.forFeature([Product])
  ],
  controllers: [SalesController],
  providers: [SalesService, ProductsService],
})
export class SalesModule {}
