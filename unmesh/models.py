from django.db import models

# Create your models here.
class Feedback(models.Model):
    email = models.CharField(max_length=50)
    review = models.TextField()
    date = models.DateField()

    def __str__(self):
        return self.email
