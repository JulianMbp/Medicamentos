from django.urls import path
from django.contrib import admin
from .views import UsersView
from .models import users

admin.site.register(users)

# URL de usuarios
urlpatterns = [
    path('users_list', UsersView.as_view(), name='users_list'),
    path('users_create', UsersView.as_view(), name='users_create'),
    path('users_update/<int:pkid>', UsersView.as_view(), name='users_update'),
    path('users_delete/<int:pkid>', UsersView.as_view(), name='users_delete'),
]