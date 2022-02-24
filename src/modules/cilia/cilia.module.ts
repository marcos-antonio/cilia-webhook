import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BudgetService } from './budget/budget.service';
import { Budget } from './budget/model/budget.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Budget])],
  providers: [BudgetService],
  exports: [BudgetService],
})
export class CiliaModule {}
