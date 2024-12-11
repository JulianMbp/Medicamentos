from django.db import models

class Farmacia(models.Model):
    nombreSede = models.CharField(max_length=100)

    def __str__(self):
        return self.nombreSede


class FarmaciaDato(models.Model):
    farmacia = models.ForeignKey(Farmacia, related_name='datos', on_delete=models.CASCADE)
    direccion = models.CharField(max_length=100)

    def __str__(self):
        return self.direccion


class Medicamentos(models.Model):
    nombre = models.CharField(max_length=20)
    existencias = models.IntegerField()
    concentracion = models.IntegerField()
    farmacias = models.ManyToManyField(Farmacia, related_name='medicamentos') 
    marca = models.CharField(max_length=20)
    categoria = models.CharField(max_length=20)
    formula = models.BooleanField(default=False)
    periodicidad = models.IntegerField()
    cantidad = models.IntegerField()
    precio_unitario = models.IntegerField()

    def __str__(self):
        return self.nombre
