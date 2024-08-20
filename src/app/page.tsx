"use client";
import { ChangeEvent, useState } from "react";
import Link from "next/link";

export default function Home() {
  const [roomId, setRoomId] = useState<string>("");
  return (
    <main className="flex flex-col items-center justify-between gap-y-6 p-24">
      <h1 className="text-3xl font-bold text-blue-700">
        NextJS Video Calling App with ZegoCloud
      </h1>
      <input
        type="text"
        placeholder="Enter meeting ID"
        className="px-4 py-2 outline-none bg-gray-100 rounded-lg"
        value={roomId}
        onChange={(e:ChangeEvent<HTMLInputElement>)=>setRoomId(e.target.value)}
      />

      <Link href={`/room/${roomId}`}>
        <button className=" px-4 py-2 bg-blue-700 text-white rounded-md">
          Join Room
        </button>
      </Link>
    </main>
  );
}
