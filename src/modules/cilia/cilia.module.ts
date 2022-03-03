import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BudgetService } from './budget/budget.service';
import { Budget } from './budget/model/budget.entity';
import { InvoiceService } from './invoice/invoice.service';
import { Invoice } from './invoice/model/invoice.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Budget, Invoice])],
  providers: [BudgetService, InvoiceService],
  exports: [BudgetService, InvoiceService],
})
export class CiliaModule {}
