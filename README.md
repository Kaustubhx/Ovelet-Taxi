# Ovelet-Taxi
NOTE: The desgin is not made by me, full credit goes to <a href='https://ui8.net/masdikastudio/products/ovlet-taxi-mobile-app-ui-kit?rel=timer'>this</a> studio.

A simple taxi booking APP made as the final year project in my college.I have no intention to use the project for any commercial use, as the design was not made and I have no authority over it.
<br>
<br>
[![Expo Version](https://img.shields.io/badge/Expo%20Version-48.0.10-brightgreen)](https://docs.expo.dev/get-started/installation/)
[![Firebase Version](https://img.shields.io/badge/Firebase-9.19.1-yellow)](https://firebase.google.com/)
[![React Redux](https://img.shields.io/badge/React%20Redux-8.0.5-blue)](https://react-redux.js.org/)



<!-- Installation Steps -->

## Installation

Step 1:
Install Ovelet Taxi dependencies with npm / yarn

```bash
  #If you use yarn
  yarn
  
  #Or if you use NPM:
  npm i
```
Step 2:
Create your google maps API key from the <a href='https://console.cloud.google.com/'>Google Console</a>
<br>
i) How to?
<br>
Ans:
  * Create a firebase project. Video Ref: <a href='https://www.youtube.com/watch?v=6juww5Lmvgo'>Creating a Firebase Project</a>
  * Copy the firebase configurations from the project settings.
  * Open the project in VS Code and paste the configuration you just copied, into the firebase.js file in the root folder.
  * Now, Open the <a href='https://console.cloud.google.com/'>Google Cloud Console</a>.
  * Select the project you just made via Firebase NOTE: Firebase Projects are automatically added in the Cloud Console
  * Enable Billing on the project you made. Docs: <a href='https://developers.google.com/maps/documentation/embed/cloud-setup#billing'>How to enable billing</a>
  * Create the API KEY. Docs: <a href='https://developers.google.com/maps/documentation/embed/get-api-key#create-api-keys'>How to create an API key</a>
  
Step 3:
Create `.env.local` file into the root folder of the project.
   * Add a line => REACT_APP_GOOGLE_MAPS_API_KEY=`KEY_COPIED_FROM_CLOUD_CONSOLE`<br>
   NOTE: The key should not be in any single or double quotes just paste as it is. <br>


Step 4: 
Run the project with the command.

```bash
  npx expo start
```

Step 5:
Scan the QR shown in the termial in the Expo Go app. You can download the Expo Go from the Playstore or Applestore
<br>
Now the React Native will bundlethe JavaScript into the language required for each Platform.
<br>
And VOILÀ.. The App will be loaded with native features on Both IOS & ANDROID Platform


## Demo
* Screenshots

<div align='center' justify='between'>
  <img src='https://i.imgur.com/gQ3qwBC.jpg' height=600 width=300 />
  <img src='https://i.imgur.com/DKtQVwG.jpg' height=600 width=300 marginLeft=30 />
  <img src='https://i.imgur.com/j72xwqO.jpg' height=600 width=300 />
</div>



