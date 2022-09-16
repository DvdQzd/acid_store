import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Sale {
    @PrimaryGeneratedColumn()
    id?: number;

    @Column()
    buyerDni: string;

    @Column()
    buyerName: string;

    @Column()
    buyerEmail: string;

    @Column()
    buyerAddress: string;

    @Column('int', {
        array: true,
        transformer: {
            from: (value: string | number) => typeof value == 'string' ? value.split(',').map((v) => parseInt(v)) : value,
            to: (value: number[]) => value.join(','),
        },
    })
    productIds: number[];

    @Column()
    paymentMethod: string;

    @Column({default: 'pending'})
    status: string;

    @Column({ nullable: true })
    total?: number;
}
