# Generated by Django 5.0.1 on 2024-01-31 04:52

import api.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_alter_room_table'),
    ]

    operations = [
        migrations.AlterField(
            model_name='room',
            name='code',
            field=models.CharField(default=api.models.generate_unique_code, max_length=8),
        ),
    ]