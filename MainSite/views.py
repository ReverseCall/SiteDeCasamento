from django.shortcuts import render

# Create your views here.

def Teste(request):
    index = 'home.html'

    return render(request, index)
