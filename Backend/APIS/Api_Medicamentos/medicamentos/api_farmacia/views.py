from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import MedicamentosList
from .serializers import MedicamentosListSerializer
from .simple_blockchain import blockchain  # Asegúrate de importar el blockchain

class MedicamentosListView(APIView):

    def get(self, request, pk):
        try:
            medicamento = MedicamentosList.objects.get(pk=pk)
        except MedicamentosList.DoesNotExist:
            return Response({"error": "Medicamento no encontrado"}, status=status.HTTP_404_NOT_FOUND)
        serializer = MedicamentosListSerializer(medicamento)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        # Verificar si la cadena de bloques es válida antes de crear un medicamento
        is_valid = blockchain.is_chain_valid()
        if not is_valid:
            return Response({"error": "La cadena de bloques no es válida"}, status=status.HTTP_400_BAD_REQUEST)

        if isinstance(request.data, list):
            serializer = MedicamentosListSerializer(data=request.data, many=True)
        else:
            serializer = MedicamentosListSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            # Aquí llamas a `new_block` después de guardar el medicamento para incrementar el índice
            blockchain.new_block(proof=1)  # Puedes ajustar el proof como lo necesites
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
        medicamentos = MedicamentosList.objects.filter(nombre__icontains=nombre)
        if not medicamentos.exists():
            return Response({"error": "No se encontraron medicamentos con el nombre proporcionado."}, status=status.HTTP_404_NOT_FOUND)
        
        serializer = MedicamentosListSerializer(medicamentos, many=True)
        return Response({"medicamentos": serializer.data}, status=status.HTTP_200_OK)

class BlockchainValidationAPIView(APIView):
    def get(self, request):
        is_valid = blockchain.is_chain_valid()
        if is_valid:
            message = "El blockchain es válido."
        else:
            message = "El blockchain no es válido."
        
        return Response({"is_valid": is_valid, "message": message})

class BlockchainView(APIView):
    def get(self, request):
        # Obtiene los bloques de la cadena
        blockchain_data = blockchain.chain  # Accede a la lista de bloques en la cadena
        return Response(blockchain_data, status=status.HTTP_200_OK)
