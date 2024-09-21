from django.shortcuts import render
from django.contrib import messages
from django.http import HttpResponseRedirect
from django.contrib.auth import authenticate, login as auth_login

from login.forms import RegisterForm, LoginForm
from .models import User


def login(request):
    '''
        Function: provides a user login form and process login requests
    '''
    if request.method == 'POST':
        obj = User.objects.get(email=request.POST['email'])
        form = LoginForm(request.POST, instance=obj)
        print("POST request received.")
        print("Form data:", request.POST)

        if form.is_valid():
            email = form.cleaned_data["email"]
            password = form.cleaned_data["password"]
            user = authenticate(request, email=email, password=password)
            if user is not None:
                auth_login(request, user)
                return render(request, "profile.html")
            else:
                form.add_error(None, "Incorrect email or password")
        else:
            print("Form is not valid.")
            print("Form errors:", form.errors)

    else:
        form = LoginForm()

    context = {"form": form}
    return render(request, "login.html", context)


def register(request):
    '''
        Function: register a new user
    '''
    if request.method == 'POST':
        # create a bound form from submitted data
        form = RegisterForm(request.POST, request.FILES)
        if form.is_valid():
            # stop short of saving data to database
            new_user = form.save(commit=False)
            username = form.cleaned_data['username']
            new_user.save()

            messages.success(request, f"Your account has been created \
                             {username}! Redirecting to login page.")
            return HttpResponseRedirect('/login/')

    else:
        # otherwise, create an empty, unbound form
        form = RegisterForm()

    context = {'form': form}
    return render(request, 'register.html', context)
