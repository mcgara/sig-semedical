"""Definicion de los modelos DB del Sistema Integral de Contactabilidad."""

from django.db import models


class TipoRespuesta(models.Model):
    indice_tipo_respuesta = models.BigAutoField(primary_key=True)
    tipo_respuesta = models.CharField(max_length=255)

    class Meta:
        db_table = 'sic_tipo_respuestas'

    def __str__(self):
        return str(self.tipo_respuesta)


class Respuesta(models.Model):
    indice_respuesta = models.BigAutoField(primary_key=True)
    indice_tipo_respuesta = models.CharField(max_length=50)
    respuesta = models.CharField(max_length=255)

    class Meta:
        db_table = 'sic_respuestas'

    def __str__(self):
        return str(self.respuesta)


class OctHeader(models.Model):
    indice = models.BigAutoField(primary_key=True)
    oct = models.CharField(max_length=255)
    fecha_oct = models.DateField(blank=True, null=True)
    linea = models.CharField(max_length=255, blank=True, null=True)
    script = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        db_table = 'sic_oct_header'

    def __str__(self):
        return str(self.oct)


class Oct(models.Model):
    indice_sic = models.BigAutoField(primary_key=True)
    oct = models.CharField(max_length=255, blank=True, null=True)
    linea = models.CharField(max_length=255, blank=True, null=True)
    identificacion = models.CharField(max_length=255, blank=True, null=True)
    municipio = models.CharField(max_length=255, blank=True, null=True)
    barrio = models.CharField(max_length=255, blank=True, null=True)
    direccion = models.CharField(max_length=255, blank=True, null=True)
    telefono_1 = models.BigIntegerField(blank=True, null=True)
    telefono_2 = models.BigIntegerField(blank=True, null=True)
    creado = models.DateTimeField(blank=True, null=True)
    creado_num = models.BigIntegerField(blank=True, null=True)
    creado_por = models.CharField(max_length=255, blank=True, null=True)
    departamento = models.CharField(max_length=255, blank=True, null=True)
    asignado_a = models.CharField(max_length=255, blank=True, null=True)
    estado_disponible = models.IntegerField(blank=True, null=True)
    correo_electronico = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        db_table = 'sic_oct'

    def __str__(self):
        return str(self.indice_sic)


class OctDetalle(models.Model):
    indice_sic_detalle = models.BigAutoField(primary_key=True)
    indice_sic = models.BigIntegerField()
    creado_por = models.CharField(max_length=255, blank=True, null=True)
    creado = models.DateTimeField(blank=True, null=True)
    creado_num = models.BigIntegerField(blank=True, null=True)
    resultado_contacto = models.CharField(max_length=255, blank=True, null=True)
    tipificacion_positiva = models.CharField(max_length=255, blank=True, null=True)
    tipificacion_negativa = models.CharField(max_length=255, blank=True, null=True)
    observacion = models.CharField(max_length=255, blank=True, null=True)
    creado_date = models.DateField(blank=True, null=True)
    creado_time = models.TimeField(blank=True, null=True)
    creado_key_time = models.CharField(max_length=50, blank=True, null=True)
    indice_tipo_respuesta = models.IntegerField(blank=True, null=True)
    indice_respuesta = models.IntegerField(blank=True, null=True)

    class Meta:
        db_table = 'sic_oct_detalles'

    def __str__(self):
        return str(self.indice_sic_detalle)


class Programacion(models.Model):
    indice_programacion = models.BigAutoField(primary_key=True)
    indice_sic = models.BigIntegerField()
    codigo_sucursal = models.IntegerField(blank=True, null=True)
    fecha_aprox = models.DateField(blank=True, null=True)

    class Meta:
        db_table = 'sic_programaciones'

    def __str__(self):
        return str(self.indice_programacion)
