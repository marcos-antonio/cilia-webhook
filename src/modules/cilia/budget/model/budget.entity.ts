import { ApiPropertyOptional } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { BudgetVersionTotals } from '../dto/budgetVersionTotals.dto';
import { Conclusion } from '../dto/conclusion.dto';
import { RepairShop } from '../dto/repairShop.dto';

@Entity()
export class Budget {
  @PrimaryGeneratedColumn()
  id: string;

  @ApiPropertyOptional()
  @Column({
    nullable: true,
  })
  budgetId: string;

  @ApiPropertyOptional()
  @Column({
    nullable: true,
  })
  budgetVersionId: number;

  @ApiPropertyOptional()
  @Column({
    nullable: true,
  })
  claimNumber: string;

  @ApiPropertyOptional()
  @Column({
    nullable: true,
  })
  budgetNumber: number;

  @ApiPropertyOptional()
  @Column({
    nullable: true,
  })
  budgeVersion: string;

  @ApiPropertyOptional()
  @Column({
    nullable: true,
  })
  budgetCreationDate: Date;

  @ApiPropertyOptional()
  @Column({
    nullable: true,
  })
  budgetVersionCreationDate: Date;

  @ApiPropertyOptional()
  @Column({
    nullable: true,
  })
  integrationNumber: string;

  @ApiPropertyOptional()
  @Column({
    nullable: true,
  })
  noticeNumber: string;

  @ApiPropertyOptional()
  @Column({
    nullable: true,
  })
  processType: string;

  @ApiPropertyOptional()
  @Column({
    type: 'jsonb',
    nullable: true,
  })
  budgetVersionTotals: BudgetVersionTotals;

  @ApiPropertyOptional({
    type: Conclusion,
  })
  @Column({
    type: 'jsonb',
    nullable: true,
  })
  conclusion: any;

  @ApiPropertyOptional()
  @Column({
    type: 'jsonb',
    nullable: true,
  })
  repairShop: RepairShop;

  @ApiPropertyOptional()
  @Column({
    nullable: true,
  })
  budgetReportPdf: string;
}
