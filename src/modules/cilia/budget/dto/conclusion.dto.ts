import { ApiPropertyOptional } from '@nestjs/swagger';

export class Conclusion {
  @ApiPropertyOptional()
  id: string;

  @ApiPropertyOptional()
  description: string;

  @ApiPropertyOptional()
  conclustionTypeId: string;

  @ApiPropertyOptional()
  conclusionTypeTitle: string;

  @ApiPropertyOptional()
  reasionId: string;

  @ApiPropertyOptional()
  reasonTitle: string;

  @ApiPropertyOptional()
  authorRole: string;

  @ApiPropertyOptional()
  authorName: string;

  @ApiPropertyOptional()
  createdAt: Date;

  @ApiPropertyOptional()
  privacyConfiguration: string;
}
