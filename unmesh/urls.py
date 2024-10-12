from django.contrib import admin
from django.urls import path, include
from unmesh import views

urlpatterns = [
    path('', views.index, name='home'),
    path("gallery", views.gallery, name='gallery'),
    path("project1", views.project1, name="project1"),
    path("project2", views.project2, name="project2"),
    path("project3", views.project3, name="project3")
]
