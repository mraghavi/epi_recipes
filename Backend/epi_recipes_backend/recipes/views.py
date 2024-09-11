from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .search_service import search_recipes

@csrf_exempt
def search_recipes_view(request):
    if request.method == 'GET':
        query = request.GET.get('query', '')
        
        # Collect filters from request parameters
        filters = {
            'rating_min': request.GET.get('rating_min'),
            'rating_max': request.GET.get('rating_max'),
            'calories_min': request.GET.get('calories_min'),
            'calories_max': request.GET.get('calories_max'),
            'protein_min': request.GET.get('protein_min'),
            'protein_max': request.GET.get('protein_max'),
            'fat_min': request.GET.get('fat_min'),
            'fat_max': request.GET.get('fat_max'),
            'vegetarian': request.GET.get('vegetarian'),
            'non_vegetarian': request.GET.get('non_vegetarian')  # Add this line
        }
        
        # Remove empty filters (if any)
        filters = {k: v for k, v in filters.items() if v not in [None, '']}
        
        print("Query:", query)  # Debugging statement
        print("Filters:", filters)  # Debugging statement
        
        # Perform the search with non-empty filters
        results = search_recipes(query, filters)
        return JsonResponse({'results': results})
    
    return JsonResponse({'error': 'Invalid request method'}, status=400)
