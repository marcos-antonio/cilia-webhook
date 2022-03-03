import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BudgetService } from './budget/budget.service';
import { Budget } from './budget/model/budget.entity';
import { InvoiceService } from './invoice/invoice.service';

@Module({
  imports: [TypeOrmModule.forFeature([Budget])],
  providers: [BudgetService, InvoiceService],
  exports: [BudgetService],
})
export class CiliaModule {}
