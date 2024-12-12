from django.urls import path
from .views import (
    MedicamentosListView,
    MedicamentoByNombreView,
    BlockchainValidationAPIView,
    BlockchainView
)

urlpatterns = [
    path('medicamentos/', MedicamentosListView.as_view(), name='medicamentos-list'),
    path('medicamentos/<int:pk>/', MedicamentosListView.as_view(), name='medicamento-detail'),
    path('medicamentos/nombre/<str:nombre>/', MedicamentoByNombreView.as_view(), name='medicamento-by-nombre'),
    path('blockchain/validate/', BlockchainValidationAPIView.as_view(), name='validate_blockchain'),
    path('blockchain/', BlockchainView.as_view(), name='blockchain_view'),  # Ruta para ver el blockchain

]