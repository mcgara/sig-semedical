"""Modulo para configurar las vistas de los modelos, que cantidad de informacion y en que forma."""

from rest_framework import viewsets
from . import models, serializers

class TipoRespuesta(viewsets.ModelViewSet):
    queryset = models.TipoRespuesta.objects.all()
    serializer_class = serializers.TipoRespuesta

class Respuesta(viewsets.ModelViewSet):
    queryset = models.Respuesta.objects.all()
    serializer_class = serializers.Respuesta

class OctHeader(viewsets.ModelViewSet):
    queryset = models.OctHeader.objects.all()
    serializer_class = serializers.OctHeader

class Oct(viewsets.ModelViewSet):
    queryset = models.Oct.objects.all()
    serializer_class = serializers.Oct

class OctDetalle(viewsets.ModelViewSet):
    queryset = models.OctDetalle.objects.all()
    serializer_class = serializers.OctDetalle

class Programacion(viewsets.ModelViewSet):
    queryset = models.Programacion.objects.all()
    serializer_class = serializers.Programacion
