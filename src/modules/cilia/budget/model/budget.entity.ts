import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Budget {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({
    nullable: true,
  })
  budgetId: string;

  @Column({
    nullable: true,
  })
  budgetVersionId: number;

  @Column({
    nullable: true,
  })
  claimNumber: string;

  @Column({
    nullable: true,
  })
  budgetNumber: number;

  @Column({
    nullable: true,
  })
  budgeVersion: string;

  @Column({
    nullable: true,
  })
  budgetCreationDate: Date;

  @Column({
    nullable: true,
  })
  budgetVersionCreationDate: Date;

  @Column({
    nullable: true,
  })
  integrationNumber: string;

  @Column({
    nullable: true,
  })
  noticeNumber: string;

  @Column({
    nullable: true,
  })
  processType: string;

  @Column({
    type: 'jsonb',
    nullable: true,
  })
  budgetVersionTotals: any;

  @Column({
    type: 'jsonb',
    nullable: true,
  })
  conclusion: any;

  @Column({
    type: 'jsonb',
    nullable: true,
  })
  regulatory: any;

  @Column({
    type: 'jsonb',
    nullable: true,
  })
  repairShop: any;

  @Column({
    nullable: true,
  })
  budgetReportPdf: string;
}
