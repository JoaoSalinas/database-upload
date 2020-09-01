import AppError from '../errors/AppError';
import Transaction from '../models/Transaction'
import TransactionRepository from '../repositories/TransactionsRepository'
import { getCustomRepository} from 'typeorm';

class DeleteTransactionService {
  public async execute(id: string): Promise<void> {
    const transactionRepository = getCustomRepository(TransactionRepository);

    const transaction = await transactionRepository.findOne(id);

    if(!transaction){
      throw new AppError('Transaction does not exist')
    }

    await transactionRepository.remove(transaction);
  }
}

export default DeleteTransactionService;
