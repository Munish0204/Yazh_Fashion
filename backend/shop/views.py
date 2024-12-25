from datetime import datetime
from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.views import APIView
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from django.contrib.auth.models import User
from .serializers import *
from .models import *
        
class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)
        user = self.user

        # Check if the user is a staff user
        if not user.is_staff:
            raise serializers.ValidationError("Only staff users can log in.")

        # Include any additional data you want to return
        data["username"] = user.username
        return data


class CustomTokenObtainPairView(TokenObtainPairView):
    serializer_class = CustomTokenObtainPairSerializer

        
    

# SignUp API view
class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]


class ProductListView(APIView):
    def get(self, request):
        products = Product.objects.prefetch_related('images').all()  # Fetch products and related images
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

class CategoryView(APIView):
    def get(self, request):
        category = Category.objects.all()
        serializer = categorySerializer(category, many = True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
class ProductView(APIView):
    def get(self, request, id):
        product = Product.objects.filter(id=id).first()
        if not product:
            return Response({"error": "Product not found"}, status=status.HTTP_404_NOT_FOUND)
        
        serializer = ProductSerializer(product)
        return Response(serializer.data, status=status.HTTP_200_OK)
