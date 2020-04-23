var config = {

    hosts: {
        domain: 'debalance.de',
        anonymousdomain: 'meet.debalance.de',
        authdomain: 'debalance.de',
        focus: 'focus.meet.debalance.de',
        muc: 'chat.meet.debalance.de'
    },

    bosh: '//meet.debalance.de/http-bind',
    //websocket: 'wss://meet.debalance.de/xmpp-websocket',
    clientNode: 'http://jitsi.org/jitsimeet',
    focusUserJid: 'focus@debalance.de',

    // Testing / experimental features.
    testing: {
        // Enables experimental simulcast support on Firefox.
        enableFirefoxSimulcast: false,

        // P2P test mode disables automatic switching to P2P when there are 2
        // participants in the conference.
        p2pTestMode: false

        // Enables the test specific features consumed by jitsi-meet-torture
        // testMode: false

        // Disables the auto-play behavior of *all* newly created video element.
        // This is useful when the client runs on a host with limited resources.
        // noAutoPlayVideo: false
    },

    // Disables ICE/UDP by filtering out local and remote UDP candidates in
    // signalling.
    // webrtcIceUdpDisable: false,

    // Disables ICE/TCP by filtering out local and remote TCP candidates in
    // signalling.
    // webrtcIceTcpDisable: false,


    // Media
    //

    // Audio

    // Disable measuring of audio levels.
    // disableAudioLevels: false,
    // audioLevelsInterval: 200,

    // Enabling this will run the lib-jitsi-meet no audio detection module which
    // will notify the user if the current selected microphone has no audio
    // input and will suggest another valid device if one is present.
    enableNoAudioDetection: true,

    // Enabling this will run the lib-jitsi-meet noise detection module which will
    // notify the user if there is noise, other than voice, coming from the current
    // selected microphone. The purpose it to let the user know that the input could
    // be potentially unpleasant for other meeting participants.
    enableNoisyMicDetection: true,

    // Start the conference in audio only mode (no video is being received nor
    // sent).
    // startAudioOnly: false,

    // Every participant after the Nth will start audio muted.
    // startAudioMuted: 10,

    // Start calls with audio muted. Unlike the option above, this one is only
    // applied locally. FIXME: having these 2 options is confusing.
    // startWithAudioMuted: false,

    // Enabling it (with #params) will disable local audio output of remote
    // participants and to enable it back a reload is needed.
    // startSilent: false

    // Video

    // Sets the preferred resolution (height) for local video. Defaults to 720.
    // resolution: 720,

    // w3c spec-compliant video constraints to use for video capture. Currently
    // used by browsers that return true from lib-jitsi-meet's
    // util#browser#usesNewGumFlow. The constraints are independency from
    // this config's resolution value. Defaults to requesting an ideal aspect
    // ratio of 16:9 with an ideal resolution of 720.
    // constraints: {
    //     video: {
    //         aspectRatio: 16 / 9,
    //         height: {
    //             ideal: 720,
    //             max: 720,
    //             min: 240
    //         }
    //     }
    // },

    // Enable / disable simulcast support.
    // disableSimulcast: false,

    // Enable / disable layer suspension.  If enabled, endpoints whose HD
    // layers are not in use will be suspended (no longer sent) until they
    // are requested again.
    // enableLayerSuspension: false,

    // Every participant after the Nth will start video muted.
    // startVideoMuted: 10,

    // Start calls with video muted. Unlike the option above, this one is only
    // applied locally. FIXME: having these 2 options is confusing.
    // startWithVideoMuted: false,

    // If set to true, prefer to use the H.264 video codec (if supported).
    // Note that it's not recommended to do this because simulcast is not
    // supported when  using H.264. For 1-to-1 calls this setting is enabled by
    // default and can be toggled in the p2p section.
    // preferH264: true,

    // If set to true, disable H.264 video codec by stripping it out of the
    // SDP.
    // disableH264: false,

    // Desktop sharing

    // The ID of the jidesha extension for Chrome.
    desktopSharingChromeExtId: null,

    // Whether desktop sharing should be disabled on Chrome.
    // desktopSharingChromeDisabled: false,

    // The media sources to use when using screen sharing with the Chrome
    // extension.
    desktopSharingChromeSources: [ 'screen', 'window', 'tab' ],

    // Required version of Chrome extension
    desktopSharingChromeMinExtVersion: '0.1',

    // Whether desktop sharing should be disabled on Firefox.
    // desktopSharingFirefoxDisabled: false,

    // Optional desktop sharing frame rate options. Default value: min:5, max:5.
    // desktopSharingFrameRate: {
    //     min: 5,
    //     max: 5
    // },

    // Try to start calls with screen-sharing instead of camera video.
    // startScreenSharing: false,

    // Recording

    // Whether to enable file recording or not.
    // fileRecordingsEnabled: false,
    // Enable the dropbox integration.
    // dropbox: {
    //     appKey: '<APP_KEY>' // Specify your app key here.
    //     // A URL to redirect the user to, after authenticating
    //     // by default uses:
    //     // 'https://meet.debalance.de/static/oauth.html'
    //     redirectURI:
    //          'https://meet.debalance.de/subfolder/static/oauth.html'
    // },
    // When integrations like dropbox are enabled only that will be shown,
    // by enabling fileRecordingsServiceEnabled, we show both the integrations
    // and the generic recording service (its configuration and storage type
    // depends on jibri configuration)
    // fileRecordingsServiceEnabled: false,
    // Whether to show the possibility to share file recording with other people
    // (e.g. meeting participants), based on the actual implementation
    // on the backend.
    // fileRecordingsServiceSharingEnabled: false,

    // Whether to enable live streaming or not.
    // liveStreamingEnabled: false,

    // Transcription (in interface_config,
    // subtitles and buttons can be configured)
    // transcribingEnabled: false,

    // Enables automatic turning on captions when recording is started
    // autoCaptionOnRecord: false,

    // Misc

    // Default value for the channel "last N" attribute. -1 for unlimited.
    channelLastN: -1,

    // Disables or enables RTX (RFC 4588) (defaults to false).
    // disableRtx: false,

    // Disables or enables TCC (the default is in Jicofo and set to true)
    // (draft-holmer-rmcat-transport-wide-cc-extensions-01). This setting
    // affects congestion control, it practically enables send-side bandwidth
    // estimations.
    // enableTcc: true,

    // Disables or enables REMB (the default is in Jicofo and set to false)
    // (draft-alvestrand-rmcat-remb-03). This setting affects congestion
    // control, it practically enables recv-side bandwidth estimations. When
    // both TCC and REMB are enabled, TCC takes precedence. When both are
    // disabled, then bandwidth estimations are disabled.
    // enableRemb: false,

    // Defines the minimum number of participants to start a call (the default
    // is set in Jicofo and set to 2).
    // minParticipants: 2,

    // Use XEP-0215 to fetch STUN and TURN servers.
    useStunTurn: true,

    // Enable IPv6 support.
    useIPv6: true,

    // Enables / disables a data communication channel with the Videobridge.
    // Values can be 'datachannel', 'websocket', true (treat it as
    // 'datachannel'), undefined (treat it as 'datachannel') and false (don't
    // open any channel).
    // openBridgeChannel: true,


    // UI
    //

    // Use display name as XMPP nickname.
    // useNicks: false,

    // Require users to always specify a display name.
    requireDisplayName: true,

    // Whether to use a welcome page or not. In case it's false a random room
    // will be joined when no room is specified.
    enableWelcomePage: true,

    // Enabling the close page will ignore the welcome page redirection when
    // a call is hangup.
    // enableClosePage: false,

    // Disable hiding of remote thumbnails when in a 1-on-1 conference call.
    // disable1On1Mode: false,

    // Default language for the user interface.
    // defaultLanguage: 'en',

    // If true all users without a token will be considered guests and all users
    // with token will be considered non-guests. Only guests will be allowed to
    // edit their profile.
    enableUserRolesBasedOnToken: false,

    // Whether or not some features are checked based on token.
    // enableFeaturesBasedOnToken: false,

    // Enable lock room for all moderators, even when userRolesBasedOnToken is enabled and participants are guests.
    // lockRoomGuestEnabled: false,

    // When enabled the password used for locking a room is restricted to up to the number of digits specified
    // roomPasswordNumberOfDigits: 10,
    // default: roomPasswordNumberOfDigits: false,

    // Message to show the users. Example: 'The service will be down for
    // maintenance at 01:00 AM GMT,
    // noticeMessage: '',

    // Enables calendar integration, depends on googleApiApplicationClientID
    // and microsoftApiApplicationClientID
    // enableCalendarIntegration: false,

    // Stats
    //

    // Whether to enable stats collection or not in the TraceablePeerConnection.
    // This can be useful for debugging purposes (post-processing/analysis of
    // the webrtc stats) as it is done in the jitsi-meet-torture bandwidth
    // estimation tests.
    // gatherStats: false,

    // To enable sending statistics to callstats.io you must provide the
    // Application ID and Secret.
    // callStatsID: '',
    // callStatsSecret: '',

    // enables sending participants display name to callstats
    // enableDisplayNameInStats: false

    // enables sending participants email if available to callstats and other analytics
    // enableEmailInStats: false

    // Privacy
    //

    // If third party requests are disabled, no other server will be contacted.
    // This means avatars will be locally generated and callstats integration
    // will not function.
    // disableThirdPartyRequests: false,


    // Peer-To-Peer mode: used (if enabled) when there are just 2 participants.
    //

    p2p: {
        // Enables peer to peer mode. When enabled the system will try to
        // establish a direct connection when there are exactly 2 participants
        // in the room. If that succeeds the conference will stop sending data
        // through the JVB and use the peer to peer connection instead. When a
        // 3rd participant joins the conference will be moved back to the JVB
        // connection.
        enabled: true,

        // Use XEP-0215 to fetch STUN and TURN servers.
        useStunTurn: true,

        // The STUN servers that will be used in the peer to peer connections
        stunServers: [
            //{ urls: 'stun:meet-jit-si-turnrelay.jitsi.net:443' },
            //{ urls: 'stun:stun.l.google.com:19302' },
            //{ urls: 'stun:stun1.l.google.com:19302' },
            //{ urls: 'stun:stun2.l.google.com:19302' },
	    { urls: 'stun:stun.debalance.de:5349' },
	    { urls: 'stun:stun.debalance.de:3478' }
        ],

        // Sets the ICE transport policy for the p2p connection. At the time
        // of this writing the list of possible values are 'all' and 'relay',
        // but that is subject to change in the future. The enum is defined in
        // the WebRTC standard:
        // https://www.w3.org/TR/webrtc/#rtcicetransportpolicy-enum.
        // If not set, the effective value is 'all'.
        // iceTransportPolicy: 'all',

        // If set to true, it will prefer to use H.264 for P2P calls (if H.264
        // is supported).
        preferH264: true

        // If set to true, disable H.264 video codec by stripping it out of the
        // SDP.
        // disableH264: false,

        // How long we're going to wait, before going back to P2P after the 3rd
        // participant has left the conference (to filter out page reload).
        // backToP2PDelay: 5
    },

    analytics: {
        // The Google Analytics Tracking ID:
        // googleAnalyticsTrackingId: 'your-tracking-id-UA-123456-1'

        // The Amplitude APP Key:
        // amplitudeAPPKey: '<APP_KEY>'

        // Array of script URLs to load as lib-jitsi-meet "analytics handlers".
        // scriptURLs: [
        //      "libs/analytics-ga.min.js", // google-analytics
        //      "https://example.com/my-custom-analytics.js"
        // ],
    },

    // Information about the jitsi-meet instance we are connecting to, including
    // the user region as seen by the server.
    deploymentInfo: {
        // shard: "shard1",
        region: "europe",
        userRegion: "europe"
    },

    // Allow all above example options to include a trailing comma and
    // prevent fear when commenting out the last value.
    makeJsonParserHappy: 'even if last key had a trailing comma'

    // no configuration value should follow this line.
};

/* eslint-enable no-unused-vars, no-var */
