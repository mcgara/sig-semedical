"""Modulo para gestionar las rutas de la API."""

from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register(r'oct', views.Oct)
router.register(r'octDetalle', views.OctDetalle)
router.register(r'tipoRespuesta', views.TipoRespuesta)
router.register(r'respuesta', views.Respuesta)
router.register(r'programacion', views.Programacion)

urlpatterns = router.urls
