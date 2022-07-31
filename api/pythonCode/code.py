import pandas as pd
import numpy as np
import matplotlib.pyplot as plt

# reading the two datasets
df1 = pd.read_csv('./tmdb_5000_credits.csv')
df2 = pd.read_csv('./tmdb_5000_movies.csv')

# the mean vote across the whole report
C = df2['vote_average'].mean()
# minimum votes required to be listed in the chart and get max 80%
m = df2['vote_count'].quantile(0.8)
# filtering out the movies that qualify for the chart
q_movies = df2.copy().loc[df2['vote_count'] >= m]


def weighted_rating(x, m=m, C=C):
    v = x['vote_count']
    R = x['vote_average']
    # Calculation based on the IMDB formula
    return (v/(v+m) * R) + (m/(m+v) * C)


# Define a new feature 'score' and calculate its value with `weighted_rating()`
q_movies['score'] = q_movies.apply(weighted_rating, axis=1)

# approach1 based on score
q_movies = q_movies.sort_values('score', ascending=False)

# approach2 based on popularity
pop = q_movies.sort_values('popularity', ascending=False)

#using second approach
new = pop.filter(['id', 'original_language', 'original_title'], axis=1)
new = new[:10]

print(new)
new.to_csv(r'./api/MLResult/result.csv', index=False)
