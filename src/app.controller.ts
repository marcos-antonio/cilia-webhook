import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { BudgetService } from './modules/cilia/budget/budget.service';
import { Budget } from './modules/cilia/budget/model/budget.entity';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private budgetService: BudgetService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('sendBudget')
  async receiveBudget(@Body() budget: Budget) {
    console.log('Budget received: \n', budget);
    return this.budgetService.saveBudget(budget);
  }
}
