from django.urls import path
from .views import (
    MedicamentosListView,
    MedicamentoByNombreView,
    BlockchainValidationAPIView,
    BlockchainView
)

urlpatterns = [
    path('medicamentos/', MedicamentosListView.as_view(), name='medicamentos-list'), #get y post 
    path('medicamentos/<int:pk>/', MedicamentosListView.as_view(), name='medicamento-detail'), #put y delete
    path('medicamentos/nombre/<str:nombre>/', MedicamentoByNombreView.as_view(), name='medicamento-by-nombre'), #get por nombre
    path('blockchain/validate/', BlockchainValidationAPIView.as_view(), name='validate_blockchain'),
    path('blockchain/', BlockchainView.as_view(), name='blockchain_view'), 
]