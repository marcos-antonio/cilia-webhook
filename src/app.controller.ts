import { Body, Controller, HttpStatus, Post, UseGuards } from '@nestjs/common';
import { ApiHeader, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { BudgetService } from './modules/cilia/budget/budget.service';
import { Budget } from './modules/cilia/budget/model/budget.entity';
import { InvoiceService } from './modules/cilia/invoice/invoice.service';
import { AuthGuard } from './modules/common/guards/authGuard';

@Controller()
export class AppController {
  constructor(
    private budgetService: BudgetService,
    private invoiceService: InvoiceService,
  ) {}

  @Post('sendBudget')
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Budget was successfully persisted',
  })
  @ApiResponse({
    status: 401,
    description: 'Authentication token not valid',
  })
  @ApiTags('Webhooks')
  @ApiOperation({
    summary: 'Send Budget',
    description: 'Receives a budget to persist',
  })
  @ApiHeader({
    name: 'token',
    description: 'A fixed token used to authenticate the request.',
  })
  @UseGuards(AuthGuard)
  async sendBudget(@Body() budget: Budget) {
    return this.budgetService.saveBudget(budget);
  }
  @Post('sendBudget')
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Invoice was successfully persisted',
  })
  @ApiResponse({
    status: 401,
    description: 'Authentication token not valid',
  })
  @ApiTags('Webhooks')
  @ApiOperation({
    summary: 'Send Budget',
    description: 'Receives a Invoice to persist',
  })
  @ApiHeader({
    name: 'token',
    description: 'A fixed token used to authenticate the request.',
  })
  @UseGuards(AuthGuard)
  async sendBudgetInvoice(@Body() budget: Budget) {
    return this.invoiceService.saveInvoice(budget);
  }
}
