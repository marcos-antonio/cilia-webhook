import { ApiPropertyOptional } from '@nestjs/swagger';

export class BudgetDTO {
  @ApiPropertyOptional()
  claimNumber: string;

  @ApiPropertyOptional()
  budgetNumber: number;

  @ApiPropertyOptional()
  integrationNumber: string;
}
