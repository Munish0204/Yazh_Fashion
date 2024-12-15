from django.contrib import admin
from .models import *
# Register your models here.

admin.site.register(Category)
class ProductImageInline(admin.TabularInline):  # or admin.StackedInline for vertical layout
    model = ProductImage
    extra = 1  # Number of empty file inputs shown

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ['name', 'vendor', 'category', 'quantity', 'status', 'trending']
    inlines = [ProductImageInline]  # Add the inline images model