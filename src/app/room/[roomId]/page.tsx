"use client";
import React from "react";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

export default function room({ params }: { params: { roomId: string } }) {
  const roomID: string = params.roomId;

  const myMeeting = async (element: any) => {
    // generate Kit Token
    const appID : number = Number(process.env.NEXT_PUBLIC_APPID);
    const serverSecret : string = process.env.NEXT_PUBLIC_SERVER_SECRET as string;
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomID,
      Date.now().toString(),
      "Enter your name here",
    );

    // Create instance object from Kit Token.
    const zp = ZegoUIKitPrebuilt.create(kitToken);
    // start the call
    zp.joinRoom({
      container: element,
      sharedLinks: [
        {
          name: "Personal link",
          url:
            window.location.protocol +
            "//" +
            window.location.host +
            window.location.pathname +
            "?roomID=" +
            roomID,
        },
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.GroupCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
      },
    });
  };

  return <div ref={myMeeting}
  className="w-[100vw] h-[100vh]">

  </div>;
}
