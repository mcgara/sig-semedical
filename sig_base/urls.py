"""Modulo para gestionar las rutas de la API."""

from django.urls import path, include
from rest_framework import routers
from . import views

router_api_models = routers.DefaultRouter()
router_api_models.register(r'afiliados', views.Afiliado)
router_api_models.register(r'departamentos', views.Departamento)
router_api_models.register(r'municipios', views.Municipio)
router_api_models.register(r'sucursales', views.Sucursal)

urlpatterns = [
    path("", views.frontend, name="frontend"),
    path("api/sig/models/", include(router_api_models.urls)),
]
