from django.shortcuts import render
from django.db import connection
from django.contrib import messages
import base64


def home(request):
    ''''
        Function: default home page
    '''
    with connection.cursor() as cursor:
        cursor.execute(
            """SELECT username, body, profile_pic, DATE(post_time)
            FROM "Review" JOIN "User" USING(user_id)
            ORDER BY post_time DESC
            LIMIT 6;"""
        )
        result = cursor.fetchall()
        # Convert blob data to data uri for image display in html
        result_with_uri = list(
            map(lambda x: (x[0], x[1], blob_to_uri(x[2]), x[3]), result))

    context = {"results": result_with_uri}
    return render(request, 'index.html', context)


def search(request):
    '''
        Function: a request dispatcher that handles search 
                  by result quantities
    '''
    if request.method == 'POST':
        query_text = request.POST['query']

        with connection.cursor() as cursor:
            cursor.execute(
                """SELECT street_num, street_name, city, province, rental_type, monthly_rent
                   FROM Rental
                   WHERE TRIM(street_name) = %s OR TRIM(city) = %s OR TRIM(province) = %s""",
                [query_text, query_text, query_text]
            )
            result = cursor.fetchall()

    if len(result) == 0:
        messages.error(
            request, 'Sorry your search did not return any results. Please try another one.')
        return render(request, 'index.html')
    elif len(result) == 1:  # If one result is returned, redirect to listing page
        context = {"result": result[0]}
        return render(request, 'listing.html', context)
    else:
        context = {"result": result}
        return render(request, 'listings.html', context)


def blob_to_uri(blob_data, mime_type="image/jpg"):
    '''
        Function: A utility function to convert blob data to data uri 
                  for embedding images in HTML
    '''
    if blob_data is not None:
        encoded_data = base64.b64encode(blob_data).decode('utf-8')
        return f"data:{mime_type};base64,{encoded_data}"
    return None
