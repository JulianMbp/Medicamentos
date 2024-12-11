from django.urls import path
from .views import MedicamentosAPIView, MedicamentoDetailAPIView

urlpatterns = [
    path('medicamentos/', MedicamentosAPIView.as_view(), name='medicamentos'),
    path('medicamentos/<pk_or_name>/', MedicamentoDetailAPIView.as_view(), name='medicamento_detail'),
]
