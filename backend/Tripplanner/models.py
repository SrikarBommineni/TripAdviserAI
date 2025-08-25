from django.db import models

# Create your models here.
class ItineraryInput(models.Model):
    # user_id = models.IntegerField()
    destination = models.CharField(max_length=255)
    start_date = models.DateField()
    end_date = models.DateField()

    def __str__(self):
        return f"Itinerary for {self.destination} from {self.start_date} to {self.end_date}"