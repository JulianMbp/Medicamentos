from rest_framework import serializers
from .models import Farmacia, Medicamentos

class FarmaciaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Farmacia
        fields = ['id', 'nombreSede']


class MedicamentosSerializer(serializers.ModelSerializer):
    farmacias = FarmaciaSerializer(many=True) 

    class Meta:
        model = Medicamentos
        fields = [
            'id', 'nombre', 'existencias', 'concentracion', 'farmacias',
            'marca', 'categoria', 'formula', 'periodicidad', 'cantidad', 'precio_unitario'
        ]

    def create(self, validated_data):
        # Extraemos las farmacias
        farmacias_data = validated_data.pop('farmacias')
        medicamento = Medicamentos.objects.create(**validated_data)

        # Asociamos farmacias al medicamento
        for farmacia_data in farmacias_data:
            farmacia, created = Farmacia.objects.get_or_create(**farmacia_data)
            medicamento.farmacias.add(farmacia)

        return medicamento

    def update(self, instance, validated_data):
        # Extraemos las farmacias (si las hay)
        farmacias_data = validated_data.pop('farmacias', None)

        # Actualizamos los campos del medicamento
        for attr, value in validated_data.items():
            setattr(instance, attr, value)
        instance.save()

        # Actualizamos las farmacias asociadas
        if farmacias_data is not None:
            instance.farmacias.clear()
            for farmacia_data in farmacias_data:
                farmacia, created = Farmacia.objects.get_or_create(**farmacia_data)
                instance.farmacias.add(farmacia)

        return instance
