from rest_framework import serializers
from .models import MedicamentosList

class MedicamentosListSerializer(serializers.ModelSerializer):
    class Meta:
        model = MedicamentosList
        fields = [
            'id',  # Incluye el campo ID si deseas que aparezca en las respuestas
            'nombre',
            'existencias',
            'concentracion',
            'nombreFarmacia',
            'direccion',
            'marca',
            'categoria',
            'formula',
            'periodicidad',
            'cantidad',
            'precio_unitario'
        ]
