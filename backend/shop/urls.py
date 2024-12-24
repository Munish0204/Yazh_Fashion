from django.urls import path
from .views import *
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('category/', CategoryView.as_view(), name='product-list'),
    path('products/',   ProductListView.as_view(), name='product-list'),
] + static(settings.MEDIA_URL, document_root = settings.MEDIA_ROOT)