from rest_framework import serializers
from .models import MedicamentosList

class MedicamentosListSerializer(serializers.ModelSerializer):
    class Meta:
        model = MedicamentosList
        fields = [
            'id',
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
