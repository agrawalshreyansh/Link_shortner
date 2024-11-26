from django.urls import path
from . import views

urlpatterns = [
    path('<str:item>', views.shortpage, name="shortpage"),
    path('home/',views.user_page, name="User_page")
]