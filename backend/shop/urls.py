from django.urls import path
from .views import *
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('category/', CategoryView.as_view(), name='product-list'),
    path('product/',   ProductListView.as_view(), name='product-list'),
    path('product/<int:id>/', ProductView.as_view(), name= 'products'),
    path('homeproduct/', HomeView.as_view, name= 'home_products')
] + static(settings.MEDIA_URL, document_root = settings.MEDIA_ROOT)