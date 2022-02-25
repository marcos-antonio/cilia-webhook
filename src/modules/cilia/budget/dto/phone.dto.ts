import { ApiPropertyOptional } from '@nestjs/swagger';

export class Phone {
  @ApiPropertyOptional()
  ddd: string;

  @ApiPropertyOptional()
  number: string;

  @ApiPropertyOptional()
  contactName: string;
}
