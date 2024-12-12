from django.urls import path
from .views import (
    MedicamentosView,
    BlockchainValidationAPIView,
    BlockchainAPIView,
)

urlpatterns = [
    path('ver-medicamentos/', MedicamentosView.as_view(), name='medicamentos_list'), 
    path('crear-medicamentos/', MedicamentosView.as_view(), name='medicamentos_create'), # Para GET y POST
    path('medicamentos/<str:nombre>/', MedicamentosView.as_view(), name='medicamento_detail_by_name'),  # Para GET por nombre
    path('medicamentos/<int:pkid>/', MedicamentosView.as_view(), name='medicamento_detail'),  # Para PUT y DELETE por ID
    path('blockchain/validate/', BlockchainValidationAPIView.as_view(), name='validate_blockchain'),
    path('blockchain/', BlockchainAPIView.as_view(), name='view_blockchain'),
]
