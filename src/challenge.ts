import {DocumentReference} from '@firebase/firestore';
import {Asset} from './files';
import {WeightLogData} from './measurements';

export interface UserChallenge {
  creationDate: number;
  email: string;
  /**
   * @description
   * Only if challenge was closed.
   */
  endDate?: number;
  /**
   * @description
   * Only if user checked in to the challenge.
   */
  goalDetails?: {
    cardio?: number | string;
    goal: string;
    note?: string;
    workoutPlace?: string;
    weeklyWorkoutsCount?: number;
  };
  /**
   * @description
   * Only if user checked in to the challenge.
   */
  initialState?: {
    age: number;
    bodyfat: number;
    checkInLog?: WeightLogData;
    dailyActivityPAL: number | string;
    dailySleepTime?: number;
    dailyStepCount?: number;
    height: number;
    note?: string;
    weeklyCardioTime?: number;
    weeklyWorkoutsCount?: number;
    weight: number;
  };
  isChallengeActive: boolean;
  messages?: Message[];
  name: string;
  processed: boolean;
  reference: DocumentReference;
  startDate: {
    nanoseconds: number;
    seconds: number;
  };
  submitted: boolean;
  uid: string;
  userUid: string;
}

export interface TeamChallenge {
  challengeImageUrls: Asset;
  challengers: {
    startDate: {
      nanoseconds: number;
      seconds: number;
    };
    name: string;
    reference: DocumentReference;
    userUid: string;
  }[];
  code: string;
  isChallengeActive: boolean;
  isRegistrationPeriodActive?: boolean;
  startDate: {
    nanoseconds: number;
    seconds: number;
  };
  title: string;
  uid: string;
}

export interface Message {
  assets?: Asset[];
  creationDate:
    | {
        nanoseconds: number;
        seconds: number;
      }
    | Date;
  isTrainer: boolean;
  isSeen: boolean;
  message: string;
  name: string;
  userProfilePicture: string;
  userUid: string;
}
