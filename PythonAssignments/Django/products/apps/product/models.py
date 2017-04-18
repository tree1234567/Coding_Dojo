# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

class Product(models.Model):
    name = models.CharField(max_length=50)
    description = models.CharField(max_length=50)
    weight_ounces = models.IntegerField()
    price_dollars = models.IntegerField()
    cost_to_seller = models.IntegerField()
    category = models.CharField(max_length=20)
