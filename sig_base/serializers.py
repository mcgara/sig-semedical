"""Modulo para gestionar la comunicacion entre el ORM y las peticiones HTTP a travez de los JSON."""

from rest_framework import serializers
from . import models

class Afiliado(serializers.ModelSerializer):
    class Meta:
        model = models.Afiliado
        fields = "__all__"

class Departamento(serializers.ModelSerializer):
    class Meta:
        model = models.Departamento
        fields = "__all__"

class Municipio(serializers.ModelSerializer):
    class Meta:
        model = models.Municipio
        fields = "__all__"

class Sucursal(serializers.ModelSerializer):
    class Meta:
        model = models.Sucursal
        fields = "__all__"
