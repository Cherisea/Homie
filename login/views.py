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
        form = LoginForm(data=request.POST)

        if form.is_valid():
            email = form.cleaned_data.get("username")
            password = form.cleaned_data.get("password")
            user = authenticate(request, username=email, password=password)

            if user is not None:
                auth_login(request, user)
                return render(request, "profile.html")
            else:
                form.add_error(None, "Incorrect email or password")

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
            password = form.cleaned_data.get('password')

            new_user.set_password(password)
            new_user.save()

            messages.success(request, f"Your account has been created \
                             {username}! Redirecting to login page.")
            return HttpResponseRedirect('/login/')

    else:
        # otherwise, create an empty, unbound form
        form = RegisterForm()

    context = {'form': form}
    return render(request, 'register.html', context)
