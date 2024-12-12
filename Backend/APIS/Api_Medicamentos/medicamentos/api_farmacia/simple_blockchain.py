import hashlib
import json
from time import time
from datetime import datetime

class Blockchain:
    def __init__(self):
        self.chain=[]
        #Bloque genesis
        self.new_block(proof=1,previous_hash='0')

    def new_block(self, proof, previous_hash=None):
        #Crea un nuevo bloque y lo añade a la cadena.
        timestamp = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
        block = {
            'index': len(self.chain) + 1,  
            'timestamp': timestamp, 
            'proof': proof,
            'previous_hash': previous_hash or self.hash(self.chain[-1]) if self.chain else '1', 
        }
        self.chain.append(block)
        return block

    @staticmethod
    def hash(block):
        # Crea un hash SHA-256 de un bloque.
        block_string = json.dumps(block, sort_keys=True).encode()
        return hashlib.sha256(block_string).hexdigest()

    @property
    def last_block(self):
        # Retorna el último bloque de la cadena.
        return self.chain[-1]

    def is_chain_valid(self):
        # Verifica si la cadena de bloques es válida.
        for i in range(1, len(self.chain)):
            previous_block = self.chain[i - 1]
            current_block = self.chain[i]
            if current_block['previous_hash'] != self.hash(previous_block):
                return False

        return True

blockchain = Blockchain()