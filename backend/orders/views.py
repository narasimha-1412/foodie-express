
from rest_framework import generics, permissions
from .models import Order, OrderItem
from .serializers import OrderSerializer
from restaurants.models import MenuItem, Restaurant
from rest_framework.response import Response
from rest_framework import status

class OrderCreateView(generics.CreateAPIView):
    permission_classes = [permissions.AllowAny]
    serializer_class = OrderSerializer
    def post(self, request, *args, **kwargs):
        data = request.data
        restaurant_id = data.get('restaurant_id')
        items = data.get('items', [])
        restaurant = Restaurant.objects.get(id=restaurant_id)
        order = Order.objects.create(user=request.user if request.user.is_authenticated else None, restaurant=restaurant, total=0)
        total = 0
        for it in items:
            menu = MenuItem.objects.get(id=it['menu_item_id'])
            qty = int(it.get('quantity',1))
            price = float(menu.price) * qty
            OrderItem.objects.create(order=order, menu_item=menu, quantity=qty, price=price)
            total += price
        order.total = total
        order.save()
        return Response(OrderSerializer(order).data, status=status.HTTP_201_CREATED)

class OrderListView(generics.ListAPIView):
    serializer_class = OrderSerializer
    def get_queryset(self):
        if self.request.user.is_authenticated:
            return Order.objects.filter(user=self.request.user).order_by('-created_at')
        return Order.objects.none()
