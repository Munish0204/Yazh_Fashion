# Generated by Django 5.1.4 on 2024-12-24 14:12

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('shop', '0004_product_ratings'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='product',
            name='ratings',
        ),
    ]
