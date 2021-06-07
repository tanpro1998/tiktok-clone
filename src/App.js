import "./App.css";
import Video from "./components/Video";
import { useEffect, useState } from "react";
import db from "./firebase";

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    db.collection('videos').onSnapshot((snapshot) =>
      setVideos(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);
  return (
    <div className="app">
      <div className="app__videos">
        {videos.map(
          ({ url, channel, description, song, likes, messages, shares }) => (
            <Video
              url={url}
              channel={channel}
              description={description}
              song={song}
              likes={likes}
              messages={messages}
              shares={shares}
            />
          )
        )}
        <Video
          url="https://v16.tiktokcdn.com/66025c94b0148fa1db42500524035f38/60be434f/video/tos/alisg/tos-alisg-pve-0037/015ee3fb084648ce94cc5ac3e1b52e0e/?a=1180&br=1804&bt=902&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=3&ds=3&er=&l=202106071003190101152280650106A7D2&lr=tiktok&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M208PDl3ZTxnNTMzODgzM0ApODNkNWk3NGQ0Nzs5aTQ4N2dfcDY0ZHNlcV9gLS1kLzRzc19jMjAvLjBiXmJjMjJjNl46Yw%3D%3D&vl=&vr="
          channel="tan.py"
          description="Yeu em khong:))))"
          song="sunflowwer"
          likes={8000}
          messages={2000}
          shares={900}
        />
        <Video
          url="https://v9-vn.tiktokcdn.com/d5f5414e070310cfe283a31ec7d50da0/60be455e/video/tos/alisg/tos-alisg-pve-0037/7eb3e5857a9f4c38bef9e579ead57a57/?a=1180&br=2806&bt=1403&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=3&ds=3&er=&l=2021060710115901011513817616077EF6&lr=tiktok&mime_type=video_mp4&net=0&pl=0&qs=0&rc=MzdtbXZmMzQzNTMzODgzM0ApaTc4OGRoaTtpNzk0ZWlpN2dtNV9naW1xZG9gLS1kLzRzczFeXjAwMjNjXzVeNDFhYjY6Yw%3D%3D&vl=&vr="
          channel="tan.py"
          description="Yeu em khong:))))"
          song="sunflowwer"
          likes={2000}
          messages={200}
          shares={600}
        />
        <Video
          url="https://v16.tiktokcdn.com/c32240447ce8999c2f014fcca579423a/60be460d/video/tos/alisg/tos-alisg-pve-0037/6d14009765564057a8944270339bb126/?a=1180&br=826&bt=413&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=3&ds=3&er=&l=202106071015020102341061432407FF1D&lr=tiktok&mime_type=video_mp4&net=0&pl=0&qs=0&rc=anJzd3J0bHNlNTMzODgzM0ApNWdmNWk2OmQzN2Y8Z2Q4NmdfZ2tpbm1obHJgLS1kLzRzczI1YTBhXjFeNGEzNi1eXjQ6Yw%3D%3D&vl=&vr="
          channel="tan.py"
          description="Yeu em khong:))))"
          song="sunflowwer"
          likes={5000}
          messages={900}
          shares={700}
        />
      </div>
    </div>
  );
}

export default App;
