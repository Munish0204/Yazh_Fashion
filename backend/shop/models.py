from django.db import models

class Category(models.Model):
    name = models.CharField(max_length=150, null=False, blank=False)
    status = models.BooleanField(default=False, help_text="0-show, 1-Hidden")
    
    def __str__(self):
        return f"{self.name} - {'Hidden' if self.status else 'Show'}"

class Product(models.Model):
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    name = models.CharField(max_length=150, null=False, blank=False)
    vendor = models.CharField(default='Yazh Fashion', max_length=150)
    description = models.TextField()
    off_price = models.FloatField(null=False, blank=False)
    std_price = models.FloatField(null=False, blank=False)
    quantity = models.IntegerField(default=0)
    status = models.BooleanField(default=False, help_text="0-show, 1-Hidden")
    trending = models.BooleanField(default=False, help_text="0-Normal, 1-Trending")
    
    def save(self, *args, **kwargs):
        if self.quantity == 0:
            self.status = True
            self.trending = False
        super().save(*args, **kwargs)

    def __str__(self):
        return f"{self.name} - {self.vendor} - {self.category.name} - {self.off_price} - {self.std_price} - {self.quantity} - {'Trending' if self.trending else 'Normal'} - {'Hidden' if self.status else 'Show'}"

class ProductImage(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='images')
    image = models.FileField(upload_to='product_images/')

    def __str__(self):
        return f"Image for {self.product.name}"
