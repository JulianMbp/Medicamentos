from .simple_blockchain import Blockchain

blockchain = Blockchain()

def add_transaction_to_blockchain(data):
    blockchain.add_block(data)
    return blockchain.chain[-1] 
