"""Modulo para gestionar las rutas de la API."""

from django.urls import path, include
from rest_framework import routers
from . import views

router_models = routers.DefaultRouter()
router_models.register(r'oct', views.Oct)
router_models.register(r'octDetalle', views.OctDetalle)
router_models.register(r'tipoRespuesta', views.TipoRespuesta)
router_models.register(r'respuesta', views.Respuesta)
router_models.register(r'programacion', views.Programacion)

urlpatterns = [
    path("models/", include(router_models.urls)),
]
