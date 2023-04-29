// import React, { useRef, useEffect } from "react";

// const YouTubePlayer = ({ videoId }) => {
//   const playerRef = useRef(null);

//   useEffect(() => {
//     if (window.YT && window.YT.Player) {
//       // if the YouTube API is already loaded, create the player
//       createPlayer();
//     } else {
//       // load the YouTube API script if it's not already loaded
//       const tag = document.createElement("script");
//       tag.src = "https://www.youtube.com/iframe_api";
//       const firstScriptTag = document.getElementsByTagName("script")[0];
//       firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

//       // create the player once the script has loaded
//       window.onYouTubeIframeAPIReady = createPlayer;
//     }
//   }, []);

//   const createPlayer = () => {
//     playerRef.current = new window.YT.Player("player", {
//       videoId: videoId,
//       playerVars: {
//         modestbranding: 1,
//         controls: 0,
//         autoplay: 1,
//         rel: 0,
//         showinfo: 0,
//         fs: 1,
//         cc_load_policy: 0,
//         iv_load_policy: 3,
//         autohide: 1,
//         playsinline: 1,
//         suggestedQuality: "hd720",
//         loop: 0,
//         playlist: videoId,
//         mute: 0,
//         start: 0,
//         end: null,
//         origin: window.location.origin,
//         enablejsapi: 1,
//         widget_referrer: window.location.href,
//         disablekb: 0,
//         suggestedVideos: false, // turn off suggested videos
//       },
//       events: {
//         onReady: onPlayerReady,
//       },
//     });
//   };

//   const onPlayerReady = (event) => {
//     event.target.playVideo();
//   };

//   return (
//     <div
//       style={{
//         position: "relative",
//         width: "100%",
//         paddingTop: "56.25%" /* 16:9 aspect ratio */,
//       }}
//     >
//       <div
//         style={{
//           position: "absolute",
//           top: 0,
//           left: 0,
//           width: "100%",
//           height: "100%",
//         }}
//       >
//         <div
//           id="player"
//           style={{
//             position: "absolute",
//             top: 0,
//             left: 0,
//             width: "100%",
//             height: "100%",
//             borderRadius: "8px",

//           }}
//         >
//           {/* the YouTube player will be embedded here */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default YouTubePlayer;











import React, { useRef, useEffect } from "react";

const YouTubePlayer = ({ videoId }) => {
  const playerRef = useRef(null);

  useEffect(() => {
    if (window.YT && window.YT.Player) {
      // if the YouTube API is already loaded, create the player
      createPlayer();
    } else {
      // load the YouTube API script if it's not already loaded
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // create the player once the script has loaded
      window.onYouTubeIframeAPIReady = createPlayer;
    }
  }, []);

  const createPlayer = () => {
    playerRef.current = new window.YT.Player("player", {
      videoId: videoId,
      playerVars: {
        modestbranding: 1,
        controls: 0,
        autoplay: 1,
        rel: 0,
        showinfo: 0,
        fs: 1,
        cc_load_policy: 0,
        iv_load_policy: 3,
        autohide: 1,
        playsinline: 1,
        suggestedQuality: "hd720",
        loop: 1,
        playlist: videoId,
        mute: 0,
        start: 0,
        end: null,
        origin: window.location.origin,
        enablejsapi: 1,
        widget_referrer: window.location.href,
        disablekb: 0,
        suggestedVideos: false // turn off suggested videos
      },
      events: {
        onReady: onPlayerReady
      }
    });
  };

  const onPlayerReady = event => {
    event.target.playVideo();
  };

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        paddingTop: "56.25%" /* 16:9 aspect ratio */
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%"
        }}
      >
        <div
          id="player"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            // borderRadius: "8px"
          }}
        >
          {/* the YouTube player will be embedded here */}
        </div>
      </div>
    </div>
  );
};

export default YouTubePlayer;