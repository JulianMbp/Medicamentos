import json
from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, permissions
from api_users.models import users
from .serializer import users_serializer
import base64

# Create your views here.
# Clase users view
class UsersView(APIView):
    def get(self, request, *args, **kwargs):
        lista_usuarios = users.objects.all()
        serializer_usuarios = users_serializer(lista_usuarios, many=True)
        return Response(serializer_usuarios.data, status=status.HTTP_200_OK)

    def post(self, request, *args, **kwargs):
        # Crear el diccionario con los datos
        data = {
            'name': request.data.get('name'),
            'lastName': request.data.get('lastName'),
            'number': request.data.get('number'),
            'email': request.data.get('email'),
            'dateBirth': request.data.get('dateBirth'),
        }

        # Usar el serializer para validar y guardar
        serializador = users_serializer(data=data)
        if serializador.is_valid():
            serializador.save()
            return Response(
                {
                    "message": "Usuario creado con éxito",
                    "data": serializador.data,
                },
                status=status.HTTP_201_CREATED
            )
        else:
            return Response(
                {
                    "message": "Error al crear usuario",
                    "data": serializador.errors,
                },
                status=status.HTTP_400_BAD_REQUEST
            )

    def put(self, request, pkid):
        usuario_actualizado = users.objects.filter(id=pkid).update(
            name=request.data.get('name'),
            lastName=request.data.get('lastName'),
            number=request.data.get('number'),
            email=request.data.get('email'),
            dateBirth=request.data.get('dateBirth'),
        )
        return Response({"message": "Usuario actualizado con éxito"}, status=status.HTTP_200_OK)

    def delete(self, request, pkid):
        usuario_eliminado = users.objects.filter(id=pkid).delete()
        return Response({"message": "Usuario eliminado con éxito"}, status=status.HTTP_204_NO_CONTENT)