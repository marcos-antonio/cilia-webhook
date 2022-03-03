import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Invoice } from './model/invoice.entity';

@Injectable()
export class InvoiceService {
  constructor(
    @InjectRepository(Invoice)
    private repository: Repository<Invoice>,
  ) {}

  saveInvoice(invoice: any) {
    return this.repository.save(invoice);
  }
}
