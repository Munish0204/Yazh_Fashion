from rest_framework import serializers
from django.contrib.auth.models import User
from .models import *

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        # Include all fields except `last_login` and `is_superuser`
        fields = ['__all__']
        extra_kwargs = {
            "password": {"write_only": True},
        }

    def create(self, validated_data):
        # Use `create_user` to handle password hashing
        user = User.objects.create_user(**validated_data)
        return user
class ProductImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductImage
        fields = ['id', 'image']

class categorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['name', 'status']

class ProductSerializer(serializers.ModelSerializer):
    images = ProductImageSerializer(many=True, read_only=True)  # Include related images
    category_name = serializers.CharField(source='category.name', read_only=True)  # Optional category name display

    class Meta:
        model = Product
        fields = [
            'id', 'category', 'category_name', 'name', 'vendor', 'description',
            'off_price', 'std_price', 'quantity', 'status', 'trending', 'images'
        ]

class ProductCreateUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = [
            'category', 'name', 'vendor', 'description', 'off_price',
            'std_price', 'ratings', 'quantity', 'status', 'trending'
        ]