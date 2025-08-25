from django.urls import path
from rest_framework_simplejwt.views import (TokenObtainPairView,TokenRefreshView) # type: ignore
from .views import signup_view, login_view  # type: ignore

urlpatterns = [
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('signup/', signup_view, name='signup_view'),
    path('login/', login_view, name='login_view'),
]
