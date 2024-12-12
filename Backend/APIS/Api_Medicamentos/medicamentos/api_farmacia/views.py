from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Medicamentos, Farmacia
from .serializers import MedicamentosSerializer, FarmaciaSerializer
from .blockchain_manager import add_transaction_to_blockchain

class MedicamentosView(APIView):
    def get(self, request, *args, **kwargs):
        medicamentos = Medicamentos.objects.all()
        serializer = MedicamentosSerializer(medicamentos, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    def post(self, request, *args, **kwargs):
        data = {
             'nombre':request.data.get('nombre'),
             'existencias':request.data.get('existencias'), 
             'concentracion', 
             'nombreFarmacia',
            'direccion',
            'marca', 'categoria', 'formula', 'periodicidad', 'cantidad', 'precio_unitario'
        
        }



class BlockchainValidationAPIView(APIView):
    def get(self, request):
        from .blockchain_manager import blockchain
        is_valid = blockchain.is_chain_valid()
        return Response({"is_valid": is_valid})

class BlockchainAPIView(APIView):
    def get(self, request):
        from .blockchain_manager import blockchain
        
        chain_data = [
            {
                "index": block['index'],
                "timestamp": block['timestamp'],
                "transactions": block['transactions'],  # Cambiado de 'data' a 'transactions'
                "proof": block['proof'],
                "previous_hash": block['previous_hash']
            } for block in blockchain.chain
        ]
        return Response({"blockchain": chain_data})