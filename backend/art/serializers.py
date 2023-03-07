from rest_framework import serializers
from .models import Art

class ArtSerlializer(serializers.ModelSerializer):
    class Meta:
        model = Art
        fields = ['id', 'title', 'image', 'price', 'size', 'sold']
        depth = 1