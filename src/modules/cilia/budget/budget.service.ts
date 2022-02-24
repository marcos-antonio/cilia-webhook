import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Budget } from './model/budget.entity';

@Injectable()
export class BudgetService {
  constructor(
    @InjectRepository(Budget)
    private repository: Repository<Budget>,
  ) {}

  saveBudget(budget: any) {
    return this.repository.save(budget);
  }
}
