from rest_framework import serializers
from .models import Refuel, GasStation, Event

class RefuelSerializer(serializers.ModelSerializer):
    class Meta: 
        model= Refuel
        fields ='__all__'