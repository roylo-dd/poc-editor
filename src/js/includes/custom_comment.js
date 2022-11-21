// Application data will be available under a global variable `appData`.
export const appData = {
    // Users data.
    users: [
        {
            id: 'user-1',
            name: 'Joe Doe',
            // Note that the avatar is optional.
            avatar: 'https://randomuser.me/api/portraits/thumb/men/26.jpg'
        },
        {
            id: 'user-2',
            name: 'Ella Harper',
            avatar: 'https://randomuser.me/api/portraits/thumb/women/65.jpg'
        }
    ],

    // The ID of the current user.
    userId: 'user-1',

    // Comment threads data.
    // commentThreads: [
    //     {
    //         threadId: 'thread-1',
    //         comments: [
    //             {
    //                 commentId: 'comment-1',
    //                 authorId: 'user-1',
    //                 content: '<p>Are we sure we want to use a made-up disorder name?</p>',
    //                 createdAt: new Date( '09/20/2018 14:21:53' ),
    //                 attributes: {}
    //             },
    //             {
    //                 commentId: 'comment-2',
    //                 authorId: 'user-2',
    //                 content: '<p>Why not?</p>',
    //                 createdAt: new Date( '09/21/2018 08:17:01' ),
    //                 attributes: {}
    //             }
    //         ]
    //     }
    // ],

    // Editor initial data.
    initialData:
        `<h2>
                    <comment-start name="thread-1"></comment-start>
                    Bilingual Personality Disorder
                    <comment-end name="thread-1"></comment-end>
                </h2>
                <p>
                    This may be the first time you hear about this made-up disorder but it actually isn’t so far from the truth.
                    As recent studies show, the language you speak has more effects on you than you realize.
                    According to the studies, the language a person speaks affects their cognition,
                    behavior, emotions and hence <strong>their personality</strong>.
                </p>
                <p>
                    This shouldn’t come as a surprise
                    <a href="https://en.wikipedia.org/wiki/Lateralization_of_brain_function">since we already know</a>
                    that different regions of the brain become more active depending on the activity.
                    The structure, information and especially <strong>the culture</strong> of languages varies substantially
                    and the language a person speaks is an essential element of daily life.
                </p>`
};


export class CommentsIntegration {
    constructor( editor ) {
        this.editor = editor;
    }

    static get requires() {
        return [ 'CommentsRepository' ];
    }

    init() {
        const usersPlugin = this.editor.plugins.get( 'Users' );
        const commentsRepositoryPlugin = this.editor.plugins.get( 'CommentsRepository' );

        // Load the users data.
        for ( const user of appData.users ) {
            usersPlugin.addUser( user );
        }

        // Set the current user.
        usersPlugin.defineMe( appData.userId );

        // Load the comment threads data.
        // for ( const commentThread of appData.commentThreads ) {
        //     commentsRepositoryPlugin.addCommentThread( commentThread );
        // }
    }
}