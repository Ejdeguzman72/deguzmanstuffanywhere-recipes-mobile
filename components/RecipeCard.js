import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { List, IconButton } from 'react-native-paper';

const RecipeCard = ({ recipe }) => {
  const [expandedIngredients, setExpandedIngredients] = useState(false);
  const [expandedDirections, setExpandedDirections] = useState(false);

  const toggleIngredients = () => setExpandedIngredients(!expandedIngredients);
  const toggleDirections = () => setExpandedDirections(!expandedDirections);

  return (
    <View style={{ marginBottom: 20 }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>{recipe.name}</Text>
      <Text style={{ fontStyle: 'italic', color: 'gray',  color: 'gray'  }}>{recipe.descr}</Text>

      <List.Accordion
        title="Ingredients"
        left={(props) => <List.Icon {...props} icon="food-variant" />}
        expanded={expandedIngredients}
        onPress={toggleIngredients}
        titleStyle={{ color: 'black', fontWeight: 'bold' }}
      >
        {recipe.ingredients.map((ingredient, index) => (
          <Text key={index}>{ingredient} </Text>
        ))}
      </List.Accordion>

      <List.Accordion
        title="Directions"
        left={(props) => <List.Icon {...props} icon="clipboard-text" />}
        expanded={expandedDirections}
        onPress={toggleDirections}
        titleStyle={{ color: 'black', fontWeight: 'bold' }}
      >
        {recipe.directions.map((direction, index) => (
          <Text key={index} style={{ color: 'white' }}>{`${index + 1}. ${direction}`} </Text>
        ))}
      </List.Accordion>
    </View>
  );
};

export default RecipeCard;
