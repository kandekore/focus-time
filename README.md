# React Timer App

This repository contains a React Native app that serves as a timer application with focus functionality. Users can set a focus subject, start a timer, and track their focus history. The app is built using React Native and Expo.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
  - [App.js](#appjs)
  - [components/Countdown.js](#componentscountdownjs)
  - [components/RoundedButton.js](#componentsroundedbuttonjs)
  - [features/focus.js](#featuresfocusjs)
  - [features/focushistory.js](#featuresfocushistoryjs)
  - [features/Timer.js](#featurestimerjs)
  - [features/timing.js](#featurestimingjs)
- [License](#license)
- [Acknowledgements](#acknowledgements)

## Installation

To run the app locally, please follow these steps:

1. Clone this repository to your local machine.
2. Make sure you have Node.js and npm installed.
3. Open a terminal and navigate to the project directory.
4. Run the following command to install the project dependencies:

- npm install

5. Once the installation is complete, you can start the app by running:

- npm start

6. This will start the Expo development server, and you can choose to run the app in an Android or iOS simulator or scan the QR code with the Expo Go app on your mobile device.

## Usage

Upon launching the app, you will see a screen where you can set a focus subject. Enter the subject you want to focus on and tap the "+" button. The focus subject will be added, and you will see it listed below the input field.

To start the timer, tap on the focus subject you want to focus on from the list. The timer will start, and you can track the remaining time in minutes and seconds. The progress bar will indicate the progress of the timer.

You can adjust the timer duration by tapping on the timing buttons below the timer. There are three options available: 1 minute, 30 seconds, and 10 seconds.

If you want to pause the timer, tap the "pause" button. To resume the timer, tap the "start" button.

Once the timer ends, the device will vibrate, and the focus subject will be added to the focus history. You can view the focus history by scrolling down on the screen.

If you want to clear the current focus subject, tap the "-" button.

## Components

### App.js

This file contains the main component of the app. It manages the state of the current focus subject and the focus history. The component renders either the Focus component or the Timer component based on the current focus subject.

### components/Countdown.js

This file contains the Countdown component, which is responsible for displaying the countdown timer. It receives the minutes, isPaused, onProgress, and onEnd props. The countdown timer starts when isPaused is false and calls the onEnd function when it reaches zero.

### components/RoundedButton.js

This file contains the RoundedButton component, which is a reusable button component with rounded edges. It accepts various props, including style, textStyle, size, and onPress. The button is displayed with the specified size and title and triggers the onPress function when pressed.

### features/focus.js

This file contains the Focus component, which allows users to set a focus subject. It includes a TextInput for entering the subject and a RoundedButton for adding the subject to the focus list. The current subject is stored in the component's state and passed to the addSubject function when the button is pressed.

### features/focushistory.js

This file contains the FocusHistory component, which displays the history of focused subjects. If there is no history or it is empty, a message is displayed. Otherwise, the history is rendered as a list using the FlatList component.

### features/Timer.js

This file contains the Timer component, which manages the countdown timer and the overall timer functionality. It includes the Countdown component, a ProgressBar to display the progress, and the Timing component for adjusting the timer duration. The component receives the focusSubject, clearSubject, and onTimerEnd props.

### features/timing.js

This file contains the Timing component, which provides buttons for adjusting the timer duration. It includes three buttons for 1 minute, 30 seconds, and 10 seconds durations. The onChangeTime function is called with the selected duration when a button is pressed.

## License

This plugin is released under the GPLv2 or later license. See the [LICENSE](https://www.gnu.org/licenses/old-licenses/gpl-2.0.html) file for more details.

## Acknowledgements

This app was built as part of a React Native course on Udemy.
