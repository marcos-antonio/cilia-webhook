import { ApiPropertyOptional } from '@nestjs/swagger';

export class Budget {
  @ApiPropertyOptional()
  claimNumber: string;

  @ApiPropertyOptional()
  budgetNumber: number;

  @ApiPropertyOptional()
  integrationNumber: string;
}
