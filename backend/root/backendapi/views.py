from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Refuel, Event
from .serializers import RefuelSerializer, EventSerializer
import json
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

@api_view(['GET'])
def GetEvent(request,pk):
    try:
        element =Event.objects.get(id=pk)
        ser =EventSerializer(element, many=False)
        return Response(ser.data)
    except Exception as e:
        return Response({'message':str(e)})

@api_view(['GET'])
def GetAllEvents(request): 
    elements = Event.objects.all()
    ser = EventSerializer(elements, many=True)
    return Response(ser.data)

@api_view(['POST'])
def CreateEvent(request): #new event
    serializer = EventSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response({"message":"Something is wrong!"})

@api_view(['POST'])
def CreateRefuel(request):
    serializer=RefuelSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response({"message":"Something is wrong!"})

@api_view(['PUT'])
def ModifyEvent(request, pk):
    event=Event.objects.get(id=pk)
    serializer=EventSerializer(instance=event, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response({"message":"Something is wrong!"})

@api_view(['DELETE'])
def DeleteEvent(request, pk):
    event=Event.objects.get(id=pk)
    serializer=EventSerializer(instance=event)
    event.delete()
    return Response(serializer.data)