from django.urls import path
from .views import (
    MedicamentosAPIView,
    MedicamentoDetailAPIView,
    BlockchainValidationAPIView,
    BlockchainAPIView,
)

urlpatterns = [
    path('medicamentos/', MedicamentosAPIView.as_view(), name='medicamentos'),
    path('medicamentos/<pk_or_name>/', MedicamentoDetailAPIView.as_view(), name='medicamento_detail'),
    path('blockchain/validate/', BlockchainValidationAPIView.as_view(), name='validate_blockchain'),
    path('blockchain/', BlockchainAPIView.as_view(), name='view_blockchain'),
    path('crea/', MedicamentosAPIView.as_view(), name='medicamento_create'),
]
