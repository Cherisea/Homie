from django.shortcuts import render

# Create your views here.


def write_review(request):
    '''
        Function: provides a form to write a review
    '''
    return render(request, "write_review.html")
