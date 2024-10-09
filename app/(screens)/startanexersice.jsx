import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  View,
  Alert,
} from 'react-native';
import Slider from '@react-native-community/slider';
import colors from '../../constants/colors';

export default function StartExercise() {
  const [goalInput, setGoalInput] = useState('');
  const [goal, setGoal] = useState('');
  const [erpTasks, setErpTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');
  const [difficultyInput, setDifficultyInput] = useState(1);

  const setNewGoal = () => {
    if (goalInput.trim()) {
      setGoal(goalInput);
      setGoalInput('');
      setErpTasks([]);
      Alert.alert('Goal set!', 'You can now add ERP tasks to achieve this goal.');
    } else {
      Alert.alert('Error', 'Please enter a goal.');
    }
  };

  const addErpTask = () => {
    if (taskInput.trim()) {
      const newTasks = [...erpTasks, { task: taskInput, difficulty: difficultyInput }];
      newTasks.sort((a, b) => a.difficulty - b.difficulty);
      setErpTasks(newTasks);
      setTaskInput('');
      setDifficultyInput(1);
    } else {
      Alert.alert('Error', 'Please enter a valid task.');
    }
  };

  const editErpTask = (index, newTask, newDifficulty) => {
    const updatedTasks = [...erpTasks];
    updatedTasks[index] = { task: newTask, difficulty: newDifficulty };
    updatedTasks.sort((a, b) => a.difficulty - b.difficulty);
    setErpTasks(updatedTasks);
  };

  const deleteErpTask = (index) => {
    const updatedTasks = erpTasks.filter((_, i) => i !== index);
    setErpTasks(updatedTasks);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Your Current Goal</Text>
      {goal ? (
        <>
          <Text style={styles.goal}>{goal}</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter an ERP task"
            value={taskInput}
            onChangeText={setTaskInput}
          />
          <View style={styles.sliderContainer}>
            <Text>Difficulty: {difficultyInput}</Text>
            <Slider
              style={styles.slider}
              minimumValue={1}
              maximumValue={10}
              step={1}
              value={difficultyInput}
              onValueChange={setDifficultyInput}
              minimumTrackTintColor={colors.secondary}
              maximumTrackTintColor="#000000"
            />
          </View>
          <TouchableOpacity style={styles.button} onPress={addErpTask}>
            <Text style={styles.buttonText}>Add ERP Task</Text>
          </TouchableOpacity>
          <FlatList
            data={erpTasks}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => (
              <View style={styles.taskContainer}>
                <Text style={styles.task}>
                  {item.task} (Difficulty: {item.difficulty})
                </Text>
                <TouchableOpacity
                  style={styles.editButton}
                  onPress={() => {
                    const newTask = prompt('Edit Task', item.task);
                    const newDifficulty = prompt('Edit Difficulty (1-10)', item.difficulty.toString());
                    if (newTask && newDifficulty >= 1 && newDifficulty <= 10) {
                      editErpTask(index, newTask, parseInt(newDifficulty, 10));
                    }
                  }}
                >
                  <Text style={styles.buttonText}>Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.deleteButton}
                  onPress={() => deleteErpTask(index)}
                >
                  <Text style={styles.buttonText}>Delete</Text>
                </TouchableOpacity>
              </View>
            )}
          />
        </>
      ) : (
        <>
          <TextInput
            style={styles.input}
            placeholder="Enter your goal"
            value={goalInput}
            onChangeText={setGoalInput}
          />
          <TouchableOpacity style={styles.button} onPress={setNewGoal}>
            <Text style={styles.buttonText}>Set Goal</Text>
          </TouchableOpacity>
        </>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: colors.primary,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 24,
    color: 'white',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 16,
    backgroundColor: 'white',
  },
  sliderContainer: {
    marginBottom: 16,
  },
  slider: {
    width: '100%',
    height: 40,
  },
  button: {
    backgroundColor: colors.secondary,
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  goal: {
    fontSize: 18,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 8,
    marginVertical: 5,
    textAlign: 'center',
  },
  taskContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 8,
    marginVertical: 5,
  },
  task: {
    fontSize: 16,
  },
  editButton: {
    backgroundColor: 'blue',
    padding: 5,
    borderRadius: 5,
  },
  deleteButton: {
    backgroundColor: 'red',
    padding: 5,
    borderRadius: 5,
  },
});