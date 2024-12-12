import hashlib
import json
from time import time

class Blockchain:
    def __init__(self):
        # Almacenamos la cadena de bloques
        self.chain = []
        # Almacenamos transacciones pendientes
        self.current_transactions = []
        # Creamos el bloque génesis
        self.new_block(previous_hash='1', proof=100)

    def new_block(self, proof, previous_hash=None):
        """
        Crea un nuevo bloque y lo añade a la cadena.
        :param proof: El proof de trabajo del bloque actual.
        :param previous_hash: Hash del bloque anterior.
        :return: El nuevo bloque.
        """
        block = {
            'index': len(self.chain) + 1,  # El índice comienza desde 1
            'timestamp': time(),
            'transactions': self.current_transactions,
            'proof': proof,
            'previous_hash': previous_hash or self.hash(self.chain[-1]),
        }

        # Reseteamos la lista de transacciones pendientes
        self.current_transactions = []

        # Añadimos el nuevo bloque a la cadena
        self.chain.append(block)
        return block

    def new_transaction(self, sender, recipient, amount):
        """
        Crea una nueva transacción y la añade a la lista de transacciones pendientes.
        :param sender: Dirección del remitente.
        :param recipient: Dirección del destinatario.
        :param amount: Monto de la transacción.
        :return: El índice del bloque que contendrá esta transacción.
        """
        self.current_transactions.append({
            'sender': sender,
            'recipient': recipient,
            'amount': amount,
        })
        
        # Asegúrate de que 'self.last_block' sea un bloque válido
        # y retorna el índice del próximo bloque (es decir, el bloque que contendrá la transacción)
        return self.last_block['index'] + 1

    @staticmethod
    def hash(block):
        """
        Crea un hash SHA-256 de un bloque.
        :param block: Bloque.
        :return: Hash del bloque.
        """
        block_string = json.dumps(block, sort_keys=True).encode()
        return hashlib.sha256(block_string).hexdigest()

    @property
    def last_block(self):
        """Retorna el último bloque de la cadena."""
        return self.chain[-1]

    def proof_of_work(self, last_proof):
        """
        Algoritmo simple de Proof of Work:
         - Encuentra un número p' tal que hash(pp') contenga 4 ceros al inicio, donde p es el proof anterior.
        :param last_proof: Proof del bloque anterior.
        :return: Nuevo proof.
        """
        proof = 0
        while self.valid_proof(last_proof, proof) is False:
            proof += 1
        return proof

    @staticmethod
    def valid_proof(last_proof, proof):
        """
        Valida el proof: ¿hash(last_proof, proof) tiene 4 ceros al inicio?
        :param last_proof: Proof del bloque anterior.
        :param proof: Proof actual.
        :return: True si es válido, False si no.
        """
        guess = f'{last_proof}{proof}'.encode()
        guess_hash = hashlib.sha256(guess).hexdigest()
        return guess_hash[:4] == "0000"

    def is_chain_valid(self):
        """
        Verifica si la cadena de bloques es válida.
        :return: True si la cadena es válida, False si no lo es.
        """
        # Recorremos todos los bloques de la cadena
        for i in range(1, len(self.chain)):
            # Obtenemos el bloque actual y el bloque anterior
            previous_block = self.chain[i - 1]
            current_block = self.chain[i]

            # Comprobamos si el hash del bloque anterior es correcto
            if current_block['previous_hash'] != self.hash(previous_block):
                return False

            # Comprobamos si el proof de trabajo es válido
            if not self.valid_proof(previous_block['proof'], current_block['proof']):
                return False

        return True
