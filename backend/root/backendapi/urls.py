from django.urls import path
from . import views

urlpatterns = [
    path('refuels/', views.GetAllRefuels),
    path('refuel/<int:pk>', views.GetTheRefuelById)
]