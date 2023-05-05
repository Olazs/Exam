from django.contrib import admin
from .models import Event, Refuel, GasStation
# Register your models here.
admin.site.register(Event)
admin.site.register(Refuel)
admin.site.register(GasStation)