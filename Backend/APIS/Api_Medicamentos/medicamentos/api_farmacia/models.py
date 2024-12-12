from django.db import models

class MedicamentosList(models.Model):
    nombre=models.CharField(max_length=20)
    existencias=models.IntegerField()
    concentracion=models.IntegerField()
    nombreFarmacia=models.CharField(max_length=50)
    direccion=models.CharField(max_length=100, null=True)
    marca=models.CharField(max_length=20)
    categoria=models.CharField(max_length=20)
    formula=models.BooleanField(default=False)
    periodicidad=models.IntegerField()
    cantidad=models.IntegerField()
    precio_unitario=models.IntegerField()

