import geopandas as gpd
import matplotlib.pyplot as plt
from shapely.geometry import Point, LineString

# Function to create a map for a specific day
def create_daily_map(day, locations, route):
    # Load world map data
    world = gpd.read_file(gpd.datasets.get_path('naturalearth_lowres'))
    
    # Create GeoDataFrame for locations
    points = gpd.GeoDataFrame(locations, geometry=[Point(xy) for xy in zip(locations['Longitude'], locations['Latitude'])])
    
    # Create LineString for the route
    route_line = LineString([(x, y) for x, y in zip(route['Longitude'], route['Latitude'])])
    route_gdf = gpd.GeoDataFrame({'geometry': [route_line]})

    # Plot
    fig, ax = plt.subplots(figsize=(15, 10))
    world.plot(ax=ax, color='lightgrey', edgecolor='black')
    route_gdf.plot(ax=ax, color='red', linewidth=2, linestyle='--')
    points.plot(ax=ax, color='blue', markersize=50)
    
    # Customize the plot
    ax.set_title(f'Day {day} Itinerary', fontsize=16)
    for idx, row in points.iterrows():
        ax.annotate(row['Name'], (row['Longitude'], row['Latitude']), xytext=(5, 5), textcoords='offset points')
    
    # Set the extent to focus on the area of interest
    ax.set_xlim(min(locations['Longitude']) - 1, max(locations['Longitude']) + 1)
    ax.set_ylim(min(locations['Latitude']) - 1, max(locations['Latitude']) + 1)
    
    plt.tight_layout()
    plt.savefig(f'day_{day}_map.png', dpi=300, bbox_inches='tight')
    plt.close()

# Example usage:
day_1_locations = {
    'Name': ['LAX', 'Honolulu'],
    'Latitude': [33.9416, 21.3069],
    'Longitude': [-118.4085, -157.8583]
}

day_1_route = {
    'Latitude': [33.9416, 21.3069],
    'Longitude': [-118.4085, -157.8583]
}

create_daily_map(1, gpd.GeoDataFrame(day_1_locations), gpd.GeoDataFrame(day_1_route))

# Repeat this process for each day of your trip, adjusting the locations and routes accordingly.