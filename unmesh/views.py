from django.shortcuts import render, redirect
from django.contrib import messages
from datetime import datetime
from .models import Feedback

def index(request):
    if request.method == 'POST':
        email = request.POST.get('email')
        review = request.POST.get('review')
        if email and review:
            feedback = Feedback(
                email=email, 
                review=review, 
                date=datetime.today().date()  # Save only the date
            )
            feedback.save()
            messages.success(request, 'Your feedback has been submitted successfully!')
        else:
            messages.error(request, 'Both email and review are required.')
        return redirect('/')  # Redirect to display the message
    
    return render(request, 'index.html')


def gallery(request):
    return render(request,'gallery.html')

def project1(request):
    return render(request, 'project1.html')

def project2(request):
    return render(request, 'project2.html')

def project3(request):
    return render(request, 'project3.html')