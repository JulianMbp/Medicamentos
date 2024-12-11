from rest_framework import serializers
from api_users.models import users

class users_serializer(serializers.ModelSerializer):
    class Meta:
        model = users
        fields = ['id', 'name', 'lastName', 'number', 'email', 'dateBirth']


