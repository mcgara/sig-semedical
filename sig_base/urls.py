"""Modulo para gestionar las rutas de la API."""

from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register(r'afiliados', views.Afiliado)
router.register(r'departamentos', views.Departamento)
router.register(r'municipios', views.Municipio)
router.register(r'sucursales', views.Sucursal)

urlpatterns = router.urls
