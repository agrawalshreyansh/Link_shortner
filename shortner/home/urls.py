from django.urls import path
from . import views

urlpatterns = [
    path('code', views.shortpage, name="shortpage"),
    path('home/',views.user_page, name="User_page")
]