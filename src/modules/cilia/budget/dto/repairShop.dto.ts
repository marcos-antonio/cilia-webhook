import { ApiPropertyOptional } from '@nestjs/swagger';
import { Address } from './address.dto';
import { Phone } from './phone.dto';

export class RepairShop {
  @ApiPropertyOptional()
  documentIdentifier: string;

  @ApiPropertyOptional()
  company: string;

  @ApiPropertyOptional()
  trade: string;

  @ApiPropertyOptional()
  email: string;

  @ApiPropertyOptional()
  administrator: string;

  @ApiPropertyOptional()
  insurerCredentialRepairShopType: string;

  @ApiPropertyOptional()
  repairShopType: string;

  @ApiPropertyOptional()
  address: Address;

  @ApiPropertyOptional()
  phone: Phone;
}
