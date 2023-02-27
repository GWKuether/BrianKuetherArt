from django.db import models

# Create your models here.

class Art(models.Model):
    title = models.CharField(max_length=255)
    image = models.ImageField(upload_to='files/artwork')
    price = models.DecimalField(max_digits=9, decimal_places=2)
    sold = models.BooleanField()
