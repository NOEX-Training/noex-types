declare module 'noex-types' {
    namespace NOEXTypes {
        interface Team {
            creationDate: {
                nanoseconds: number;
                seconds: number;
            };
            instagramTitle: string;
            isDev: boolean;
            memberUids: string[];
            name: string;
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
                    tileStyle: 'small' | 'large';
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
        
        interface TeamWorkout extends Workout {}
        
        interface TeamWorkoutSection {
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
        interface TrainerPost {
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
        interface TrainerComment {
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
        interface TrainerReply {
            commentUid: string;
            creationDate: {
                nanoseconds: number;
                seconds: number;
            };
            likes?: string[];
            reply:
                | {
                      reply: string;
                      toUserName: string;
                      toUserUid: string;
                  }
                | string;
            sharedCameraPhoto: TeamFile | null;
            sharedMedia: TeamFile | null;
            teamUid: string;
            trainerUid: string;
            uid: string;
            userName: string;
            userProfilePicture: string | null;
            userUid: string;
        }
        
        interface QuestionPost extends Omit<TrainerPost, 'sharedWorkout'> {}
        interface QuestionComment extends TrainerComment {}
        interface QuestionReply extends TrainerReply {}
        /**@deprecated */
        interface UserFeedPost extends TrainerPost {}
        /**@deprecated */
        interface UserFeedComment extends TrainerComment {}
        /**@deprecated */
        interface UserFeedReply extends TrainerReply {}
        
        interface GiphyResponse {
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
        
        interface Gifs {
            analytics: {
                onclick: { url: string };
                onload: { url: string };
                onsent: { url: string };
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
        
    }
}