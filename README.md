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
  

<img width="384" alt="home" src="https://user-images.githubusercontent.com/93395352/166295455-408d99cc-5461-4819-b4cc-9465d9642930.png">

<img width="384" alt="home2" src="https://user-images.githubusercontent.com/93395352/166295690-ba2ca82b-0eaf-40cc-a175-8a6dcd3dea03.png">

<img width="384" alt="drawer" src="https://user-images.githubusercontent.com/93395352/166295750-271e5506-3350-4671-8e71-5230242be2a1.png">


<img width="384" alt="compare" src="https://user-images.githubusercontent.com/93395352/166295855-a8d30b03-8f17-4e1c-9ebc-d02f9cc76ba0.png">

<img width="384" alt="payment" src="https://user-images.githubusercontent.com/93395352/166295969-faf8086e-7f13-4177-bec7-972c83ef64be.png">

<img width="384" alt="profile" src="https://user-images.githubusercontent.com/93395352/166296009-c9e240b5-313e-4953-b9c4-561c1634c16e.png">

<img width="384" alt="camera" src="https://user-images.githubusercontent.com/93395352/166294177-f70d75b5-9d54-416a-9ffe-53d6692e0fe9.png">

