# react-native-weather-app

## Tech Used

React Native, Expo, Styled-Components


## How To Run The App in an IOS Simulator

#### Step 1: 
- Clone the repo
- Open it in your favorite editor
- Open a terminal in your editor and run `yarn install`

#### Step 2: 
- Head over to https://openweathermap.org/api/one-call-api to get an API key. (You will have to sign up)
- Head over to https://developers.google.com/maps/documentation/geocoding/overview to get a GEOCODING API key. You will have to follow the instructions on that page. I am using this to get the `Lat` and `Long` from the postal code since Open Weather API accepts only zip codes.
- Create a `.env` file in the root folder and put your keys in the file like this: 

```
API_KEY=YourOpenWeatherKeyHere
GOOGLE_KEY=YourGoogleKeyHere
```

#### Step 3:

- Download andriod studio 
- Open Simulator

#### Step 4: 

- In your terminal run `yarn start`. 
- In the browser, click on `Run on IOS Simulator`.

## Dependencies 

```json
"dependencies": {
    "expo": "~42.0.1",
    "expo-status-bar": "~1.0.4",
    "moment": "^2.29.1",
    "react": "16.13.1",
    "react-dom": "16.13.1",
    "react-native": "https://github.com/expo/react-native/archive/sdk-42.0.0.tar.gz",
    "react-native-dotenv": "^3.1.1",
    "react-native-web": "~0.13.12",
    "styled-components": "^5.3.0"
  },
  
  ```
  
#### Screenshots:
  

![home](https://user-images.githubusercontent.com/93395352/166293956-a7155236-e860-4813-8556-78643adf8263.jpg)

![home2](https://user-images.githubusercontent.com/93395352/166294020-638849be-f92a-42ca-9bd6-a6b1a0c846ca.jpg)

![drawer](https://user-images.githubusercontent.com/93395352/166294033-bc7daf9c-de71-4e2b-b7e7-26c83a740945.jpg)

![compare](https://user-images.githubusercontent.com/93395352/166294109-2f4296b1-983c-4ad6-90f5-5d76d4848aab.jpg)
![payment](https://user-images.githubusercontent.com/93395352/166294129-ba4b7443-7b32-4b60-9d55-405a1a6d7d79.jpg)
![profile](https://user-images.githubusercontent.com/93395352/166294146-0a736b8c-8055-464d-9c99-aa781187028b.jpg)
<img width="384" alt="camera" src="https://user-images.githubusercontent.com/93395352/166294177-f70d75b5-9d54-416a-9ffe-53d6692e0fe9.png">

