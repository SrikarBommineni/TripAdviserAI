from django.shortcuts import render
import json
from django.http import JsonResponse
from .models import ContactMessage
from django.views.decorators.csrf import csrf_exempt
# Create your views here.

@csrf_exempt  
def ContactMessageView(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        name = data.get('name')
        email = data.get('email')
        message = data.get('message')   
        contact = ContactMessage(name=name, email=email, message=message)
        contact.save() 
        return JsonResponse({'status': 'success'}, status=201)
    return JsonResponse({'error': 'Invalid request method'}, status=400)