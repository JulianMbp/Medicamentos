from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Medicamentos, Farmacia
from .serializers import MedicamentosSerializer, FarmaciaSerializer


class MedicamentosAPIView(APIView):
    def get(self, request):
        medicamentos = Medicamentos.objects.all()
        serializer = MedicamentosSerializer(medicamentos, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = MedicamentosSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class MedicamentoDetailAPIView(APIView):
    def get_object(self, pk_or_name):
        try:
            # Verificar si es un ID (entero)
            if pk_or_name.isdigit():
                return Medicamentos.objects.get(pk=pk_or_name)
            # Si no es un número, buscar por nombre
            return Medicamentos.objects.get(nombre=pk_or_name)
        except Medicamentos.DoesNotExist:
            return None

    def get(self, request, pk_or_name):
        medicamento = self.get_object(pk_or_name)
        if medicamento is None:
            return Response({"error": "Medicamento no encontrado"}, status=status.HTTP_404_NOT_FOUND)
        serializer = MedicamentosSerializer(medicamento)
        return Response(serializer.data)

    def put(self, request, pk):
        medicamento = self.get_object(pk)
        if medicamento is None:
            return Response({"error": "Medicamento no encontrado"}, status=status.HTTP_404_NOT_FOUND)
        serializer = MedicamentosSerializer(medicamento, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        medicamento = self.get_object(pk)
        if medicamento is None:
            return Response({"error": "Medicamento no encontrado"}, status=status.HTTP_404_NOT_FOUND)
        medicamento.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
