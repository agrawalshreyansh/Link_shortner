from django.db import models

class links(models.Model) :
    url_key = models.CharField(max_length=8)
    Org_url = models.CharField(max_length=10000)

    def __str__(self):
        return self.url_key
    


