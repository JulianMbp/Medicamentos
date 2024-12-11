from django.db import models

# Create your models here.
""" 
nombre exitencias
concentracion 
farmacia
marca
categoria
Formula boolean
periodicidad
Medicamento,
Cantidad,
Precio_Unitario
"""

class medicamentos(models.Model):
    nombre=models.CharField(max_length=20)
    exitencias=models.IntegerField(max_length=20)
    concentracion=models.IntegerField(max_length=20)
    farmacia=models.CharField(max_length=20)
    marca=models.CharField(max_length=20)
    categoria=models.CharField(max_length=20)
    Formula=models.BooleanField(False)
    periodicidad=models.IntegerField(max_length=20)
    Cantidad=models.IntegerField(max_length=20)
    Precio_Unitario=models.IntegerField(max_length=20)
