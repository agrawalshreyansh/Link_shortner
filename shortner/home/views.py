from django.shortcuts import render, redirect
from django.shortcuts import HttpResponse
from .models import links
import json
from django.http import JsonResponse
import random 
import string
from django.views.decorators.csrf import csrf_exempt


@csrf_exempt
def shortpage(request) :
    if request.method == "POST" :
        data  = json.loads(request.body)
        
        if links.objects.filter(url_key=data.get("link")).exists :

            redirect = links.objects.get(url_key=data.get("link")).Org_url
            
            return JsonResponse({'uid' : redirect})
        else :
            return JsonResponse(f"Item doesn't exist")
    else :
        return HttpResponse("Page you were looking for does't exist")


@csrf_exempt
def user_page(request) : 
        if request.method == "POST" :
            body = json.loads(request.body)
            url = body.get('link')
            short_url = gen_rand_char()
           
           
            links.objects.create(url_key=short_url, Org_url = url)
            
            return JsonResponse({ "message" : "Save success!", "shorturl" : short_url})

        else :
            return JsonResponse({"message":"404"})


def gen_rand_char() :
    surl = ''.join(random.choices(string.ascii_letters, k=3))

    if not links.objects.filter(url_key=surl).exists() :
        return surl
    
    return gen_rand_char()
  


    