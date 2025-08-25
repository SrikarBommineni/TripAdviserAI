from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
from .models import *
from django.contrib.auth.hashers import make_password
from django.contrib.auth.hashers import check_password


@csrf_exempt
def signup_view(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            name = data.get('Name')
            email = data.get('Email')
            password = data.get('Password')

            # Save new user (hash password for safety)
            user = CustomUser(name=name, email=email, password=make_password(password))
            user.save()

            return JsonResponse({"message": "User created successfully"}, status=201)

        except Exception as e:
            return JsonResponse({"error": str(e)}, status=400)

    return JsonResponse({"error": "Invalid request"}, status=400)

@csrf_exempt
def login_view(request):
    if request.method == "POST":
        try:
            data = json.loads(request.body)
            email = data.get("email")
            password = data.get("password")

            # Check if user exists
            try:
                user = CustomUser.objects.get(email=email)
            except CustomUser.DoesNotExist:
                return JsonResponse({"error": "User not found"}, status=404)

            # Validate password
            if check_password(password, user.password):
                return JsonResponse({"message": "Login successful", "user": user.name}, status=200)
            else:
                return JsonResponse({"error": "Invalid password"}, status=400)

        except Exception as e:
            return JsonResponse({"error": str(e)}, status=500)

    return JsonResponse({"error": "Invalid request method"}, status=405)

