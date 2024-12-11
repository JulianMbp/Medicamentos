from django.contrib import admin
from django.urls import path, include
from api_farmacia import urls as medicamentos_urls


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('medicamentos_urls')),
]

