import {
  CallControls,
  CallingState,
  SpeakerLayout,
  useCallStateHooks,
} from "@stream-io/video-react-sdk";
import { Loader2Icon, MessageSquareIcon, UsersIcon, XIcon } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router";
import {
  Channel,
  Chat,
  MessageInput,
  MessageList,
  Thread,
  Window,
} from "stream-chat-react";

import "@stream-io/video-react-sdk/dist/css/styles.css";
import "stream-chat-react/dist/css/v2/index.css";

function VideoCallUI({ chatClient, channel }) {
  const navigate = useNavigate();
  const { useCallCallingState, useParticipantCount } = useCallStateHooks();
  const callingState = useCallCallingState();
  const participantCount = useParticipantCount();
  const [isChatOpen, setIsChatOpen] = useState(false);

  if (callingState === CallingState.JOINING) {
    return (
      <div className="h-full flex items-center justify-center">
        <div className="text-center">
          <Loader2Icon className="w-12 h-12 mx-auto animate-spin text-primary mb-4" />
          <p className="text-lg">Joining call...</p>
        </div>
      </div>
    );
  }
  return (
    <div className="h-full flex gap-4 relative str-video bg-gradient-to-br from-[#0b0d10] via-[#11151b] to-black rounded-2xl p-4 border border-red-900/30">
      {/* MAIN VIDEO AREA */}
      <div className="flex-1 flex flex-col gap-3">
        {/* TOP BAR */}
        <div className="flex items-center justify-between bg-gradient-to-r from-[#1a0f12] via-[#2a1418] to-[#1a0f12] p-3 rounded-xl border border-red-800/40 shadow-lg">
          <div className="flex items-center gap-2">
            <UsersIcon className="w-5 h-5 text-red-400" />
            <span className="font-bold tracking-wide text-red-100">
              {participantCount}{" "}
              {participantCount === 1 ? "Warrior" : "Warriors"}
            </span>
          </div>

          {chatClient && channel && (
            <button
              onClick={() => setIsChatOpen(!isChatOpen)}
              className={`btn btn-sm gap-2 border transition-all ${
                isChatOpen
                  ? "bg-red-700 border-red-500 text-white"
                  : "bg-transparent border-red-800/40 text-red-300 hover:bg-red-900/30"
              }`}
            >
              <MessageSquareIcon className="w-4 h-4" />
              Dojo Chat
            </button>
          )}
        </div>

        {/* VIDEO STREAM */}
        <div className="flex-1 relative overflow-hidden rounded-2xl border border-red-900/30 bg-gradient-to-br from-[#0f131a] to-black shadow-inner">
          <SpeakerLayout />
        </div>

        {/* CONTROLS */}
        <div className="bg-[#12090b] p-3 rounded-xl border border-red-800/40 shadow-lg flex justify-center">
          <CallControls onLeave={() => navigate("/dashboard")} />
        </div>
      </div>

      {/* CHAT PANEL */}
      {chatClient && channel && (
        <div
          className={`flex flex-col rounded-xl border border-red-900/40 shadow-lg overflow-hidden bg-[#0f1116] transition-all duration-300 ease-in-out ${
            isChatOpen ? "w-80 opacity-100" : "w-0 opacity-0"
          }`}
        >
          {isChatOpen && (
            <>
              <div className="bg-gradient-to-r from-[#1a0f12] to-[#12090b] p-3 border-b border-red-900/40 flex items-center justify-between">
                <h3 className="font-bold text-red-200 tracking-wide">
                  Dojo Channel
                </h3>
                <button
                  onClick={() => setIsChatOpen(false)}
                  className="text-red-400 hover:text-red-200 transition-colors"
                >
                  <XIcon className="w-5 h-5" />
                </button>
              </div>

              <div className="flex-1 overflow-hidden stream-chat-dark">
                <Chat client={chatClient} theme="str-chat__theme-dark">
                  <Channel channel={channel}>
                    <Window>
                      <MessageList />
                      <MessageInput />
                    </Window>
                    <Thread />
                  </Channel>
                </Chat>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}
export default VideoCallUI;

/* <div className="absolute inset-0 pointer-events-none bg-[url('/textures/ink-noise.png')] opacity-10" /> */
