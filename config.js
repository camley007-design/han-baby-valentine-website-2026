// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {
    // Your Valentine's name that will appear in the title
    // Example: "Jade", "Sarah", "Mike"
    valentineName: "hannah mary sparks",

    // The title that appears in the browser tab
    // You can use emojis! 💝 💖 💗 💓 💞 💕
    pageTitle: "will you do me the greatest honour and privilege of being my valentine?",

    // Floating emojis that appear in the background
    // Find more emojis at: https://emojipedia.org
    floatingEmojis: {
        hearts: ['❤️', '💖', '💝', '💗', '💓', '🩷', '💕', ],  // Heart emojis
        bears: ['😽​', '​🐰​']                       // Cute bear emojis
    },

    // Questions and answers
    // Customize each question and its possible responses
    questions: {
        first: {
            text: "do you like me?",                                    // First interaction
            yesBtn: "yes",                                             // Text for "Yes" button
            noBtn: "no",                                               // Text for "No" button
            secretAnswer: "i don't like you, i love you! 🩷"           // Secret hover message
        },
        second: {
            text: "how much do you love me?",                          // For the love meter
            startText: "this much!",                                   // Text before the percentage
            nextBtn: "next 🩷"                                         // Text for the next button
        },
        third: {
            text: "will you make me the happiest person on earth and be my valentine on march 14th, 2026? 🌷​💐​", // The big question!
            yesBtn: "yes!!",                                             // Text for "Yes" button
            noBtn: "no"                                                 // Text for "No" button
        }
    },

    // Love meter messages
    // They show up depending on how far they slide the meter
    loveMessages: {
        extreme: "you may just love me most!😊​😚🩷 ​",  // Shows when they go past 5000%
        high: "I LOVE YOUUUUUU! 😊​😚​",              // Shows when they go past 1000%
        normal: "i love youuuuu! 😊​😚​"                           // Shows when they go past 100%
    },

    // Messages that appear after they say "Yes!"
    celebration: {
        title: "YAYYYYY i'm the luckiest person in the world! MWAH 🎉💝💖💗💓💞💕",
        message: "now come get your gift: cuddles and so many kisses!",
        emojis: "🎁💖🤗💝💋🩷💕"  // These will bounce around
    },

    // Color scheme for the website
    // Use https://colorhunt.co or https://coolors.co to find beautiful color combinations
    colors: {
        backgroundStart: "#d161a2",      // Gradient start (try pastel colors for a soft look)
        backgroundEnd: "#a20160",        // Gradient end (should complement backgroundStart)
        buttonBackground: "#d62e02",     // Button color (should stand out against the background)
        buttonHover: "#fd9855",          // Button hover color (slightly lighter than buttonBackground)
        textColor: "#ffffff"             // Text color (make sure it's readable!)
    },

    // Animation settings
    // Adjust these if you want faster/slower animations
    animations: {
        floatDuration: "15s",           // How long it takes hearts to float up (10-20s recommended)
        floatDistance: "50px",          // How far hearts move sideways (30-70px recommended)
        bounceSpeed: "0.5s",            // Speed of bouncing animations (0.3-0.7s recommended)
        heartExplosionSize: 1.5         // Size of heart explosion effect (1.2-2.0 recommended)
    },

    // Background Music (Optional)
    // Add your own music URL after getting proper licenses
    music: {
        enabled: true,                     // Music feature is enabled
        autoplay: true,                    // Try to autoplay (note: some browsers may block this)
        musicUrl: "https://res.cloudinary.com/dmm83f42i/video/upload/v1770735480/Strangers_In_The_Night_oeetob.mp3", // Music streaming URL
        startText: "🎵 Play Music",        // Button text to start music
        stopText: "🔇 Stop Music",         // Button text to stop music
        volume: 0.5                        // Volume level (0.0 to 1.0)
    }
};

// Don't modify anything below this line unless you know what you're doing
window.VALENTINE_CONFIG = CONFIG; 
