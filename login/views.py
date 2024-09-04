from django.shortcuts import render
from django.contrib.auth.hashers import make_password, check_password
from django.db import connection
from django.contrib import messages
from django.http import HttpResponseRedirect
import time


def login(request):
    '''
        Function: provides a user login form and process login requests
    '''
    if request.method == 'POST':
        email = request.POST['email']
        password = request.POST['password']

        with connection.cursor() as cursor:
            cursor.execute(
                """SELECT email, pwd_hash
                FROM User
                WHERE email = %s""",
                [email]
            )
            result = cursor.fetchone()

        if result is None:
            messages.error(
                request, "Can't find an account associated with this email.")
            return render(request, "login.html")
        elif check_password(password, result[1]):
            request.session['email'] = email
            return render(request, "profile.html")
        else:
            messages.error(request, "Incorrect password or email.")
            return render(request, "login.html")

    return render(request, "login.html")


def register(request):
    '''
        Function: register a new user
    '''
    if request.method == 'POST':
        username = request.POST['username']
        email = request.POST['email']
        pwd_hash = make_password(request.POST['password'])
        pic = request.FILES['profilePicture']

        with connection.cursor() as cursor:
            cursor.execute(
                """INSERT INTO User (username, email, pwd_hash, profile_pic)
                   VALUES (%s, %s, %s, %s)
                """, [username, email, pwd_hash, pic]
            )
        messages.success(
            request, "Account created successfully. Redirecting to login page in 5 seconds ...")
        time.sleep(5)
        return HttpResponseRedirect('/login/')

    return render(request, 'register.html')
