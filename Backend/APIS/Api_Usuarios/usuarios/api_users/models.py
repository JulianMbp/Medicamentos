from django.db import models
from datetime import datetime
from django.utils import timezone


# Create your models here.
#Clase publicacion para feed de publicaciones
class users(models.Model):
    name=models.CharField(max_length=20)
    lastName=models.CharField(max_length=20)
    number=models.CharField(max_length=10)
    email=models.EmailField(unique=True)
    dateBirth=models.DateField()