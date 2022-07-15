import { Asset, TeamFile } from './files';
import { Workout } from './workouts';
export interface Team {
    /**
     * @description
     * Only if challenge is active.
     */
    actualChallenge: {
        challengeImageUrls: Asset;
        challengeUid: string;
        code: string;
        isChallengeActive: boolean;
        isRegistrationPeriodActive?: boolean;
        /**
         * @description
         * For the fast count of unseen messages.
         */
        messages: {
            [key: string]: number;
        };
        startDate: {
            nanoseconds: number;
            seconds: number;
        };
    };
    creationDate: {
        nanoseconds: number;
        seconds: number;
    };
    instagramTitle: string;
    isDev: boolean;
    language: 'en' | 'hu';
    memberUids: string[];
    monthlyStats?: {
        income: number;
        leavers: number;
        subscribers: number;
    };
    name: string;
    proSubscriptionItems: string[];
    eliteSubscriptionItems: string[];
    subTrainerUids: string[];
    teamStyle: {
        appIcon: string;
        motivationImage: {
            base64: string;
            height: number;
            size: number;
            width: number;
        };
        programWorkoutsTileStyle: {
            tileImageStyle: 'image' | 'svg';
        };
        secondaryColorStyle: {
            checkBoxColor: string;
            secondaryTextColor: string;
        };
        splashScreenImage: {
            base64: string;
            height: number;
            size: number;
            width: number;
        };
        teamWorkoutsTileStyle: {
            tileImageStyle: 'image' | 'svg';
        };
        welcomeTileStyle: {
            bellIconColor: '#000000' | '#FFFFFF';
            dayTimeTextColor: '#000000' | '#FFFFFF';
            profileIconStyle: 'icon' | 'image';
            statIconColor: '#000000' | '#FFFFFF';
            tileStyle: 'small' | 'large' | 'image';
            tileImage: Asset;
            backgroundColor: string;
        };
    };
    teamCover: Asset;
    teamHeader: Asset;
    teamLogo: Asset;
    trainer: string;
    trainerPostCount: number;
    trainerUid: string;
    uid: string;
}
/**
 * @deprecated
 * 2022.02.24.
 */
export interface TeamWorkout extends Workout {
}
export interface TeamWorkoutSection {
    createdBy: string;
    creationDate: {
        nanoseconds: number;
        seconds: number;
    };
    description?: string;
    order: number;
    sectionTitle: string;
    uid: string;
    userUid: string;
}
/**@deprecated */
export interface TrainerPost {
    creationDate: {
        nanoseconds: number;
        seconds: number;
    };
    likes?: Array<{
        userName: string;
        userProfilePicture: string;
        userUid: string;
    }>;
    post: string;
    sharedCameraPhoto: TeamFile | null;
    sharedMedia: Array<TeamFile> | null;
    sharedWorkout: TeamWorkout;
    teamUid: string;
    trainerUid: string;
    uid: string;
    userName: string;
    userProfilePicture: string | null;
    userUid: string;
    youtubeLink: string | null;
}
/**@deprecated */
export interface TrainerComment {
    comment: string;
    creationDate: {
        nanoseconds: number;
        seconds: number;
    };
    likes?: string[];
    postUid: string;
    sharedCameraPhoto: TeamFile | null;
    sharedMedia: TeamFile | null;
    teamUid: string;
    trainerUid: string;
    uid: string;
    userName: string;
    userProfilePicture: string | null;
    userUid: string;
}
/**@deprecated */
export interface TrainerReply {
    commentUid: string;
    creationDate: {
        nanoseconds: number;
        seconds: number;
    };
    likes?: string[];
    reply: {
        reply: string;
        toUserName: string;
        toUserUid: string;
    } | string;
    sharedCameraPhoto: TeamFile | null;
    sharedMedia: TeamFile | null;
    teamUid: string;
    trainerUid: string;
    uid: string;
    userName: string;
    userProfilePicture: string | null;
    userUid: string;
}
export interface QuestionPost extends Omit<TrainerPost, 'sharedWorkout'> {
}
export interface QuestionComment extends TrainerComment {
}
export interface QuestionReply extends TrainerReply {
}
/**@deprecated */
export interface UserFeedPost extends TrainerPost {
}
/**@deprecated */
export interface UserFeedComment extends TrainerComment {
}
/**@deprecated */
export interface UserFeedReply extends TrainerReply {
}
export interface GiphyResponse {
    data: Array<Gifs>;
    meta: {
        msg: string;
        response_id: string;
        status: number;
    };
    pagination: {
        coutn: number;
        offset: number;
        total_count: number;
    };
}
export interface Gifs {
    analytics: {
        onclick: {
            url: string;
        };
        onload: {
            url: string;
        };
        onsent: {
            url: string;
        };
    };
    analytics_response_payload: string;
    bitly_gif_url: string;
    bitly_url: string;
    content_url: string;
    embed_url: string;
    id: string;
    images: {
        fixed_height_small: {
            frames: string;
            hash: string;
            height: string;
            mp4: string;
            mp4_size: string;
            size: string;
            url: string;
            webp: string;
            webp_size: string;
            width: string;
        };
        original: {
            frames: string;
            hash: string;
            height: string;
            mp4: string;
            mp4_size: string;
            size: string;
            url: string;
            webp: string;
            webp_size: string;
            width: string;
        };
    };
    import_datetime: string;
    id_sticker: string;
    rating: string;
    slug: string;
    source: string;
    source_tld: string;
    source_post_url: string;
    title: string;
    trending_datetime: string;
    type: string;
    url: string;
    username: string;
}
