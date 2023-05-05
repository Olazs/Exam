from django.db import models

# Create your models here.
#Base events
class Event(models.Model):
    mileage = models.IntegerField()
    description = models.TextField(null=True, blank=True)
    price = models.IntegerField(default=0)
    date=models.DateField(auto_created=True)

    def __str__(self):
        return str(self.mileage) + "(" + str(self.date) + ")"
        #return self.name
    
#Gas-station selector
class GasStation(models.Model):
    name= models.CharField(max_length=50)
    def __str__(self):
        return self.name

#Refuel, children of Base Events
class Refuel(Event):
    quantity=models.IntegerField()
    gas_station=models.ForeignKey(GasStation, null=True, on_delete=models.SET_NULL)
    def __str__(self):
        return str(self.mileage) + " - " + str(self.gas_station) + " (" + str(self.date) + ")"
    #gas_station=models.CharField(max_length=50, null=True, blank=True)



