# Generated by Django 5.1.4 on 2024-12-12 03:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api_farmacia', '0002_medicamentoslist_delete_medicamentos'),
    ]

    operations = [
        migrations.AlterField(
            model_name='medicamentoslist',
            name='nombreFarmacia',
            field=models.CharField(max_length=50),
        ),
    ]