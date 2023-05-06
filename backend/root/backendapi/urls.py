from django.urls import path
from . import views

urlpatterns = [
    path('refuels/', views.GetAllRefuels),
    path('refuel/<int:pk>', views.GetTheRefuelById),
    path('GetAllEvents/', views.GetAllEvents),
    path('GetEvent/<int:pk>', views.GetEvent),
    path('CreateEvent/', views.CreateEvent),
    path('CreateRefuel/', views.CreateRefuel),
    path('ModifyEvent/<int:pk>', views.ModifyEvent),
    path('DeleteEvent/<int:pk>', views.DeleteEvent)
]