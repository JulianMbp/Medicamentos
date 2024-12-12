from rest_framework import serializers
from .models import Medicamentos


class MedicamentosSerializer(serializers.ModelSerializer):
    class Meta:
        model = Medicamentos
        fields = [
            'id', 'nombre', 'existencias', 'concentracion', 'nombreFarmacia',
            'direccion',
            'marca', 'categoria', 'formula', 'periodicidad', 'cantidad', 'precio_unitario'
        ]