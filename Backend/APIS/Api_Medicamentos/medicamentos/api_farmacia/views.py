from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import generics
from .models import MedicamentosList
from .serializers import MedicamentosSerializer
from .blockchain_manager import add_transaction_to_blockchain


class MedicamentosView(generics.ListCreateAPIView):
    def get(self, request, *args, **kwargs):
        lista_medicamentos = MedicamentosList.objects.all()
        serializer_medicamentos = MedicamentosSerializer(lista_medicamentos, many=True)
        return Response(self.serializer_class(self.queryset, many=True).data)
    def get(self, request, nombre):
        try:
            # Busca el producto por nombre
            producto = MedicamentosList.objects.get(nombre=nombre)
        except MedicamentosList.DoesNotExist:
            return Response({"message": "Producto no encontrado"}, status=status.HTTP_404_NOT_FOUND)
        # Si se encuentra, devuelve los detalles del producto
        producto_data = {
            'nombre': producto.nombre,
            'existencias': producto.existencias,
            'concentracion': producto.concentracion,
            'nombreFarmacia': producto.nombreFarmacia,
            'direccion': producto.direccion,
            'marca': producto.marca,
            'categoria': producto.categoria,
            'formula': producto.formula,
            'periodicidad': producto.periodicidad,
            'cantidad': producto.cantidad,
            'precio_unitario': producto.precio_unitario,
        }
        return Response(producto_data, status=status.HTTP_200_OK)
    def post(self, request, *args, **kwargs):
        # Crear el diccionario con los datos
        data = {
            'nombre': request.data.get('nombre'),
            'existencias': request.data.get('existencias'),
            'concentracion': request.data.get('concentracion'),
            'nombreFarmacia': request.data.get('nombreFarmacia'),
            'direccion': request.data.get('direccion'),
            'marca': request.data.get('marca'),
            'categoria': request.data.get('categoria'),
            'formula': request.data.get('formula', False),  # Valor por defecto en caso de no estar presente
            'periodicidad': request.data.get('periodicidad'),
            'cantidad': request.data.get('cantidad'),
            'precio_unitario': request.data.get('precio_unitario'),
        }
        # Usar el serializer para validar y guardar
        serializador = MedicamentosSerializer(data=data)
        if serializador.is_valid():
            serializador.save()
            return Response(
                {
                    "message": "Medicamento creado con éxito",
                    "data": serializador.data,
                },
                status=status.HTTP_201_CREATED
            )
        else:
            return Response(
                {
                    "message": "Error al crear Medicamento",
                    "data": serializador.errors,
                },
                status=status.HTTP_400_BAD_REQUEST
            )
    def put(self, request, pkid):
        # Intenta obtener el objeto por pkid
        try:
            producto = MedicamentosList.objects.get(id=pkid)
        except MedicamentosList.DoesNotExist:
            return Response({"message": "Producto no encontrado"}, status=status.HTTP_404_NOT_FOUND)
        # Actualiza los campos del objeto con los datos de la solicitud
        producto.nombre = request.data.get('nombre', producto.nombre)
        producto.existencias = request.data.get('existencias', producto.existencias)
        producto.concentracion = request.data.get('concentracion', producto.concentracion)
        producto.nombreFarmacia = request.data.get('nombreFarmacia', producto.nombreFarmacia)
        producto.direccion = request.data.get('direccion', producto.direccion)
        producto.marca = request.data.get('marca', producto.marca)
        producto.categoria = request.data.get('categoria', producto.categoria)
        producto.formula = request.data.get('formula', producto.formula)
        producto.periodicidad = request.data.get('periodicidad', producto.periodicidad)
        producto.cantidad = request.data.get('cantidad', producto.cantidad)
        producto.precio_unitario = request.data.get('precio_unitario', producto.precio_unitario)
        # Guarda los cambios en la base de datos
        producto.save()
        return Response({"message": "Producto actualizado con éxito"}, status=status.HTTP_200_OK)
    def delete(self, request, pkid):
        Medicamento_eliminado = MedicamentosList.objects.filter(id=pkid).delete()
        return Response({"message": "Medicamento eliminado con éxito"}, status=status.HTTP_204_NO_CONTENT)
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