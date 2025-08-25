from django.shortcuts import render
import json
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from .models import *
from .Itinerarypage import GenerateText

@csrf_exempt
def itinerary_view(request):
    if request.method == "POST":
        try:
            data = json.loads(request.body.decode("utf-8"))
            response_text = GenerateText(data)

            # Try parsing into JSON (if Gemini responds in JSON)
            try:
                return JsonResponse(json.loads(response_text), safe=False)
            except:
                return JsonResponse({"raw_response": response_text}, safe=False)


        except Exception as e:
            return JsonResponse({"error": str(e)}, status=400)

    return JsonResponse({"error": "Invalid request method"}, status=405)
    
def Itinerary_Response(request):
    if request.method == 'GET':
        itineraries = ItineraryInput.objects.all()
        itinerary_list = []
        for itinerary in itineraries:
            itinerary_list.append({
                'id': itinerary.id,
                'destination': itinerary.destination,
                'start_date': itinerary.start_date,
                'end_date': itinerary.end_date
            })
        return JsonResponse(itinerary_list, safe=False)
    else:
        return JsonResponse("Unexpected Error", safe=False)