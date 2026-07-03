export const FeatureMedia = () => {
  return (
    <div className="box-border caret-transparent [mask-image:url('https://ooono.com/cdn/shop/files/cd2-mask-alpha.png?v=1709545762&width=768')] [mask-mode:alpha] [mask-repeat:no-repeat] [mask-size:contain] min-h-0 min-w-0 outline-[3px] w-full overflow-hidden [mask-position:50%] mb-8 mx-auto md:min-h-[auto] md:min-w-[auto] md:mb-0">
      <video
        playsInline="true"
        loop="loop"
        muted="muted"
        preload="metadata"
        poster="https://c.animaapp.com/mr58dsemaDi96Y/assets/84.jpg"
        className="aspect-square box-border caret-transparent max-w-full object-cover outline-[3px] w-full"
      >
        <source
          src="https://ooono.com/cdn/shop/videos/c/vp/0172582db588436984ed8fe18733651b/0172582db588436984ed8fe18733651b.HD-1080p-2.5Mbps-25380393.mp4?v=0"
          type="video/mp4"
          className="box-border caret-transparent leading-[normal] outline-[3px] font-times_new_roman"
        />
        <img
          src="https://c.animaapp.com/mr58dsemaDi96Y/assets/84.jpg"
          className="box-border caret-transparent leading-[normal] max-w-full outline-[3px] font-times_new_roman"
        />
      </video>
    </div>
  );
};
