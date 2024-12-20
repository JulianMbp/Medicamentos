from django.db import migrations, models

class Migration(migrations.Migration):

    initial = True

    operations = [
        migrations.CreateModel(
            name='Medicamentos',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=20)),
                ('existencias', models.IntegerField()),
                ('concentracion', models.IntegerField()),
                ('nombreFarmacia', models.CharField(max_length=20)),
                ('direccion', models.CharField(max_length=100)),
                ('marca', models.CharField(max_length=20)),
                ('categoria', models.CharField(max_length=20)),
                ('formula', models.BooleanField(default=False)),
                ('periodicidad', models.IntegerField()),
                ('cantidad', models.IntegerField()),
                ('precio_unitario', models.IntegerField()),
            ],
        ),
        # Add other model creation operations as needed
    ]
