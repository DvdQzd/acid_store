import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
    constructor(
        @InjectRepository(Product)
        private productsRepository: Repository<Product>,
    ) { }

    async findAll(): Promise<Product[]> {
        return this.productsRepository.find();
    }

    async findOne(id: string): Promise<Product> {
        return this.productsRepository.findOne({where: {id: parseInt(id)}});
    }

    async remove(id: string): Promise<void> {
        await this.productsRepository.delete(id);
    }

    async create(product: Product): Promise<Product> {
        return this.productsRepository.save(product);
    }

    async update(id: string, product: Product): Promise<Product> {
        await this.productsRepository.update(id, product);
        return this.productsRepository.findOne({where: {id: parseInt(id)}});
    }
}
