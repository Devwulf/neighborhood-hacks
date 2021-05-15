/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

export type RootStackParamList = {
  Login: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  TabOne: undefined;
  TabTwo: undefined;
};

export type TabOneParamList = {
  TabOneScreen: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};

export type LoginParamList = {
  Login: undefined;
  Signup: undefined;
  Onboarding: undefined;
}

export type OnboardingParamList = {
  One: undefined;
  Two: undefined;
  Three: undefined;
  Choice: undefined;
  Business: undefined;
  Customer: undefined;
}

export type BusinessWizardParamList = {
  Details: undefined;
  Services: undefined;
  Location: undefined;
  Specialty: undefined;
  AllSet: undefined;
}

export type CustomerWizardParamList = {
  Details: undefined;
  Location: undefined;
  Services: undefined;
  Liked: undefined;
  AllSet: undefined;
}
