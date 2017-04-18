import django
from apps.product.models import Product


for p in Product.objects.all():
    print "--->", p.name

