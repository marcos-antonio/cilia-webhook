import { ApiPropertyOptional } from '@nestjs/swagger';

export class Address {
  @ApiPropertyOptional()
  street: string;

  @ApiPropertyOptional()
  cep: string;

  @ApiPropertyOptional()
  district: string;

  @ApiPropertyOptional()
  number: string;

  @ApiPropertyOptional()
  city: string;

  @ApiPropertyOptional()
  state: string;
}
