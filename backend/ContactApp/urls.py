from django.urls import path
from .views import ContactMessageView

urlpatterns = [
    path('contact/', ContactMessageView, name='contact-message'),
]
