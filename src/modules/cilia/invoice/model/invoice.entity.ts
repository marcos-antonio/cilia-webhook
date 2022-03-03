import { ApiPropertyOptional } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { BudgetDTO } from '../dto/budget.dto';

@Entity()
export class Invoice {
  @PrimaryGeneratedColumn()
  id: string;

  @ApiPropertyOptional()
  @Column({
    nullable: true,
  })
  number: string;

  @ApiPropertyOptional()
  @Column({
    nullable: true,
  })
  serieNumber: string;

  @ApiPropertyOptional()
  @Column({
    nullable: true,
  })
  subSerieNumber: string;

  @ApiPropertyOptional()
  @Column({
    nullable: true,
  })
  budgetInvoiceType: string;

  @ApiPropertyOptional()
  @Column({
    nullable: true,
  })
  issueDate: Date;

  @ApiPropertyOptional()
  @Column({
    nullable: true,
  })
  createdAt: Date;

  @ApiPropertyOptional()
  @Column({
    nullable: true,
  })
  approvedAt: Date;

  @ApiPropertyOptional()
  @Column({
    nullable: true,
    type: 'float',
  })
  invoiceValue: number;

  @ApiPropertyOptional()
  @Column({
    nullable: true,
  })
  invoiceXmlFile: string;

  @ApiPropertyOptional()
  @Column({
    nullable: true,
  })
  recipientCnpj: string;

  @ApiPropertyOptional()
  @Column({
    nullable: true,
  })
  recipientType: string;

  @ApiPropertyOptional()
  @Column({
    nullable: true,
  })
  takerCnpj: string;

  @ApiPropertyOptional()
  @Column({
    nullable: true,
    type: 'float',
  })
  issAliquot: number;

  @ApiPropertyOptional()
  @Column({
    nullable: true,
    type: 'jsonb',
  })
  invoiceFiles: string[];

  @ApiPropertyOptional()
  @Column({
    nullable: true,
    type: 'jsonb',
  })
  budget: BudgetDTO;
}
