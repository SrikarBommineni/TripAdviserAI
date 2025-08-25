from django.urls import path
from .views import *

urlpatterns = [
    path('itinerary/', itinerary_view, name='itinerary_view'),
    path('itinerary/response/', Itinerary_Response, name='itinerary_response'),
]


