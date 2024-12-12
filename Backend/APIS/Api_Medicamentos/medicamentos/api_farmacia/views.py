from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import MedicamentosList
from .serializers import MedicamentosListSerializer

class MedicamentosListView(APIView):

    def get(self, request):
        medicamentos = MedicamentosList.objects.all()
        serializer = MedicamentosListSerializer(medicamentos, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    def post(self, request):
        if isinstance(request.data, list):
            serializer = MedicamentosListSerializer(data=request.data, many=True)
        else:
            serializer = MedicamentosListSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    def put(self, request, pk):
        try:
            medicamento = MedicamentosList.objects.get(pk=pk)
        except MedicamentosList.DoesNotExist:
            return Response({"error": "Medicamento no encontrado"}, status=status.HTTP_404_NOT_FOUND)
        serializer = MedicamentosListSerializer(medicamento, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    def delete(self, request, pk):
        try:
            medicamento = MedicamentosList.objects.get(pk=pk)
        except MedicamentosList.DoesNotExist:
            return Response({"error": "Medicamento no encontrado"}, status=status.HTTP_404_NOT_FOUND)
        medicamento.delete()
        return Response({"message": "Medicamento eliminado"}, status=status.HTTP_204_NO_CONTENT)

class MedicamentoByNombreView(APIView):
    def get(self, request, nombre):
        try:
            medicamento = MedicamentosList.objects.get(nombre=nombre)
        except MedicamentosList.DoesNotExist:
            return Response({"error": "Medicamento no encontrado"}, status=status.HTTP_404_NOT_FOUND)
        serializer = MedicamentosListSerializer(medicamento)
        return Response(serializer.data, status=status.HTTP_200_OK)

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