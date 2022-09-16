import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Sale } from '../entities/sale.entity';

@Injectable()
export class SalesService {
    constructor(
        @InjectRepository(Sale)
        private salesRepository: Repository<Sale>,
    ) { }

    async findAll(): Promise<Sale[]> {
        return this.salesRepository.find();
    }

    async findOne(id: string): Promise<Sale> {
        return this.salesRepository.findOne({where: {id: parseInt(id)}});
    }

    async remove(id: string): Promise<void> {
        await this.salesRepository.delete(id);
    }

    async create(sale: Sale): Promise<Sale> {
        return this.salesRepository.save(sale);
    }

    async update(id: string, sale: Sale): Promise<Sale> {
        await this.salesRepository.update(id, sale);
        return this.salesRepository.findOne({where: {id: parseInt(id)}});
    }
}
