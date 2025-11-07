"""
Configurar las vistas del Frontend de las aplicaciones.
"""

from django.shortcuts import render
from django.http import HttpRequest
from django.urls import path


def view_index(request: HttpRequest) -> HttpRequest:
    """Vista del proyecto web principal."""

    return render(request, "index.html")

urlpatterns = [
    path("", view_index, name="frontend"),
]
