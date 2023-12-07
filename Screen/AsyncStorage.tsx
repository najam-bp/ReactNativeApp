import AsyncStorage from '@react-native-async-storage/async-storage';

export let saveUser = async (user: any) => {
  AsyncStorage.setItem('@app_user', JSON.stringify(user));
  console.log('save user is called!');
};

export let removeUser = async () => {
  await AsyncStorage.removeItem('@app_user');
};

export let getUser: any = async () => {
  let user = undefined;
  let app_user: any = await AsyncStorage.getItem('@app_user');
  console.log('======= function', JSON.parse(app_user));
  user = JSON.parse(app_user);
  return user;
};
