"""
Configura funciones gancho que se ejecutan en algun evento del proyecto.
"""

import os
from django.utils.autoreload import autoreload_started

def on_reload_started(_):
    """Se ejecuta antes de iniciar el autoreload de Django al observar cambios en el proyecto."""

    # Compilar el frontend basado en Vite/React
    os.system("cd frontend && npm run build && cd ..")


# Configurar fuciones Hooks

autoreload_started.connect(on_reload_started)
