import { ApiPropertyOptional } from '@nestjs/swagger';

export class BudgetVersionTotals {
  @ApiPropertyOptional()
  totalWorkforceCost: number;

  @ApiPropertyOptional()
  totalGrossPartsWithAnyDiscount: number;

  @ApiPropertyOptional()
  totalGrossPartsWithZeroDiscount: number;

  @ApiPropertyOptional()
  totalGrossParts: number;

  @ApiPropertyOptional()
  totalDiscountParts: number;

  @ApiPropertyOptional()
  totalNetParts: number;

  @ApiPropertyOptional()
  totalPaintMaterial: number;

  @ApiPropertyOptional()
  totalBudgeted: number;

  @ApiPropertyOptional()
  deductible: number;

  @ApiPropertyOptional()
  totalWithoutCoverage: number;

  @ApiPropertyOptional()
  totalPartsSupplied: number;

  @ApiPropertyOptional()
  totalNetPartsSupplied: number;

  @ApiPropertyOptional()
  totalDamage: number;

  @ApiPropertyOptional()
  totalNet: number;
}
