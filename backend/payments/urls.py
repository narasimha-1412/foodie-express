from django.urls import path
from .views import CreatePaymentIntentView
urlpatterns = [path('create/', CreatePaymentIntentView.as_view())]
