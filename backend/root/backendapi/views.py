from django.http import JsonResponse
from .models import Refuel
from .serializers import RefuelSerializer
# Create your views here.


def GetAllRefuels(request): #all refuel listed out.
    elements = Refuel.objects.all()
    ser = RefuelSerializer(elements, many=True)
    return JsonResponse(ser.data, safe=False)