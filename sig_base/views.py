"""Modulo para configurar las vistas de los modelos, que cantidad de informacion y en que forma."""

from rest_framework import viewsets
from django.shortcuts import render
from django.http import HttpRequest
from . import models, serializers


def frontend(request: HttpRequest):
    return render(request, "index.html")

class Afiliado(viewsets.ModelViewSet):
    queryset = models.Afiliado.objects.all()
    serializer_class = serializers.Afiliado

class Municipio(viewsets.ModelViewSet):
    queryset = models.Municipio.objects.all()
    serializer_class = serializers.Municipio

class Departamento(viewsets.ModelViewSet):
    queryset = models.Departamento.objects.all()
    serializer_class = serializers.Departamento

class Sucursal(viewsets.ModelViewSet):
    queryset = models.Sucursal.objects.all()
    serializer_class = serializers.Sucursal
