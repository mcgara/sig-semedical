"""Definicion de los modelos DB del Sistema Integral de Contactabilidad."""

from django.db import models


class Departamento(models.Model):
    indice_departamento = models.AutoField(primary_key=True)
    nombre_departamento = models.CharField(max_length=255)

    class Meta:
        db_table = 'sig_departamentos'

    def __str__(self):
        return str(self.nombre_departamento)


class Municipio(models.Model):
    indice_municipio = models.AutoField(primary_key=True)
    indice_departamento = models.ForeignKey(
        Departamento,
        on_delete=models.CASCADE,
        db_column='indice_departamento',
        related_name='municipios'
    )
    nombre_municipio = models.CharField(max_length=255)

    class Meta:
        db_table = 'sig_municipios'

    def __str__(self):
        return str(self.nombre_municipio)


class Afiliado(models.Model):
    id = models.AutoField(primary_key=True)
    identificacion = models.CharField(max_length=255)
    tipo_documento = models.CharField(max_length=50)
    nombre_1 = models.CharField(max_length=100)
    nombre_2 = models.CharField(max_length=100, blank=True, null=True)
    apellido_1 = models.CharField(max_length=100)
    apellido_2 = models.CharField(max_length=100, blank=True, null=True)
    sexo = models.CharField(max_length=10, blank=True, null=True)
    estado = models.CharField(max_length=50, blank=True, null=True)
    regimen = models.CharField(max_length=50, blank=True, null=True)
    fecha_nacimiento = models.DateField(blank=True, null=True)
    direccion_eps = models.CharField(max_length=255, blank=True, null=True)
    telefono_eps = models.CharField(max_length=50, blank=True, null=True)
    update_direccion = models.CharField(max_length=255, blank=True, null=True)
    update_telefono_1 = models.BigIntegerField(blank=True, null=True)
    update_telefono_2 = models.BigIntegerField(blank=True, null=True)
    update_email = models.CharField(max_length=255, blank=True, null=True)
    portabilidad = models.CharField(max_length=255, blank=True, null=True)
    cohorte_prev = models.CharField(max_length=255, blank=True, null=True)
    nivel_gpn = models.CharField(max_length=50, blank=True, null=True)
    ultima_bd = models.IntegerField(blank=True, null=True)
    municipio = models.CharField(max_length=255, blank=True, null=True)
    f_inicio_port = models.CharField(max_length=50, blank=True, null=True)
    f_fin_port = models.CharField(max_length=50, blank=True, null=True)
    tipo_poblacion = models.CharField(max_length=255, blank=True, null=True)
    excento_c_mod = models.CharField(max_length=255, blank=True, null=True)
    categoria_c_mod = models.CharField(max_length=255, blank=True, null=True)
    valor_c_mod = models.FloatField(blank=True, null=True)
    queja_activa = models.CharField(max_length=255, blank=True, null=True)
    f_ultima_queja = models.CharField(max_length=255, blank=True, null=True)
    quejas_last_6m = models.IntegerField(blank=True, null=True)
    tipo_población = models.CharField(max_length=255, blank=True, null=True)
    nombre_completo_usuario = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        db_table = 'sig_afiliados'

    def __str__(self):
        return str(self.identificacion)


class Sucursal(models.Model):
    codigo_sucursal = models.IntegerField(primary_key=True)
    nombre_centro_costo = models.CharField(max_length=255, blank=True, null=True)
    nombre_sucursal = models.CharField(max_length=255, blank=True, null=True)
    nombre_operador = models.CharField(max_length=255, blank=True, null=True)
    codigo_operador = models.CharField(max_length=50, blank=True, null=True)
    zona = models.CharField(max_length=50, blank=True, null=True)
    ruta = models.CharField(max_length=50, blank=True, null=True)
    direccion_operativa = models.CharField(max_length=255, blank=True, null=True)
    codigo_departamento = models.CharField(max_length=50, blank=True, null=True)
    codigo_municipio = models.CharField(max_length=50, blank=True, null=True)
    tipo = models.CharField(max_length=50, blank=True, null=True)
    microtic = models.CharField(max_length=50, blank=True, null=True)
    nit_operador = models.CharField(max_length=50, blank=True, null=True)
    direccion_sucursal = models.CharField(max_length=255, blank=True, null=True)
    activa = models.IntegerField(blank=True, null=True)
    grupo_gpn = models.IntegerField(blank=True, null=True)
    calificador = models.IntegerField(blank=True, null=True)

    class Meta:
        db_table = 'sig_sucursales'

    def __str__(self):
        return str(self.nombre_sucursal or self.codigo_sucursal)
