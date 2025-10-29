"""Modulo para gestionar la comunicacion entre el ORM y las peticiones HTTP a travez de los JSON."""

from rest_framework import serializers
from . import models

class Oct(serializers.ModelSerializer):
    class Meta:
        model = models.Oct
        fields = "__all__"

class OctHeader(serializers.ModelSerializer):
    class Meta:
        model = models.OctHeader
        fields = "__all__"

class OctDetalle(serializers.ModelSerializer):
    class Meta:
        model = models.OctDetalle
        fields = "__all__"

class Programacion(serializers.ModelSerializer):
    class Meta:
        model = models.Programacion
        fields = "__all__"

class Respuesta(serializers.ModelSerializer):
    class Meta:
        model = models.Respuesta
        fields = "__all__"

class TipoRespuesta(serializers.ModelSerializer):
    class Meta:
        model = models.TipoRespuesta
        fields = "__all__"
