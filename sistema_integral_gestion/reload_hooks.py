"""Modulo para configurar hooks en el autoreload."""

import os
from django.utils.autoreload import autoreload_started

def on_reload_started(sender, **kwargs):
    os.system("cd frontend && npm run build && cd ..")


autoreload_started.connect(on_reload_started)
