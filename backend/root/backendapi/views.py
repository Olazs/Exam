from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Refuel
from .serializers import RefuelSerializer
# Create your views here.


@api_view(['GET'])
def GetAllRefuels(request): #all refuel listed out.
    elements = Refuel.objects.all()
    ser = RefuelSerializer(elements, many=True)
    return Response(ser.data)

@api_view(['GET'])
def GetTheRefuelById(request, pk): #single refuel 
    try:
        element =Refuel.objects.get(id=pk)
        ser =RefuelSerializer(element, many=False)
        return Response(ser.data)
    except Exception as e:
        return Response({'message':str(e)})