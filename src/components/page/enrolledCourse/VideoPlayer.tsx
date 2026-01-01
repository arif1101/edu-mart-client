export default function VideoPlayer() {
  return (
    <div className="aspect-video w-full rounded-lg overflow-hidden bg-black">
      <iframe
        className="h-full w-full"
        src="https://www.youtube.com/embed/xpP5L1NuMQU?si=3RAXrQrzoP_Glktn"
        title="Course Video"
        allowFullScreen
      />
    </div>
  );
}
