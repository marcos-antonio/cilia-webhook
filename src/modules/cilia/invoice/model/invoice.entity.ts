import { ApiPropertyOptional } from '@nestjs/swagger';
import { Column, PrimaryGeneratedColumn } from 'typeorm';
import { Budget } from '../dto/budget.dto';

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
  })
  issAliquot: number;

  @ApiPropertyOptional()
  @Column({
    nullable: true,
    array: true,
  })
  invoiceFiles: string[];

  @ApiPropertyOptional()
  @Column({
    nullable: true,
    type: 'jsonb',
  })
  budget: Budget;
}
