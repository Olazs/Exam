from django.db import models

# Create your models here.

class Event(models.Model):
    mileage = models.IntegerField()
    description = models.TextField(null=True, blank=True)
    price = models.IntegerField(default=0)
    date=models.DateField(auto_now=True)

class Refuel(Event):
    quantity=models.IntegerField()
    gas_station=models.CharField(max_length=50, null=True, blank=True)



