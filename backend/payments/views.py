
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, permissions
from django.conf import settings
import stripe
stripe.api_key = settings.STRIPE_SECRET_KEY

class CreatePaymentIntentView(APIView):
    permission_classes = [permissions.AllowAny]
    def post(self, request):
        amount = float(request.data.get('amount', 0)) * 100
        try:
            intent = stripe.PaymentIntent.create(amount=int(amount), currency='usd')
            return Response({'client_secret': intent.client_secret})
        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)
