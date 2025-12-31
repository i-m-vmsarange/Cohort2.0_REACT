import bg from "../assets/cloud.jpg";
import profile from "../assets/profilepicture.jpg";

const ProfileCard = () => {
  return (
    <div className="h-[36] rounded-3xl flex items-center justify-center bg-neutral-100">
      <div className="relative w-[320px] bg-white rounded-3xl overflow-hidden shadow-xl text-center">
        {/* Cover */}
        <div
          className="h-36 bg-cover bg-center"
          style={{ backgroundImage: `url(${bg})` }}
        />

        {/* Profile */}
        <div className="absolute top-24 left-1/2 -translate-x-1/2">
          <div className="w-28 h-28 rounded-full p-1 bg-[conic-gradient(#ff4d4d,#ffb84d,#4dff88,#4dd2ff,#a64dff,#ff4d4d)]">
            <div className="w-full h-full rounded-full bg-white p-1">
              <img
                src={profile}
                alt="profile"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="pt-20 px-4 pb-6">
          <h3 className="text-xl font-semibold text-[#373738]">
            Noah Thompson
          </h3>
          <p className="mt-2 text-sm text-neutral-600">
            Product Designer who focuses on simplicity & usability.
          </p>

          {/* Stats */}
          <div className="mt-5 flex justify-between bg-neutral-100 rounded-2xl px-4 py-3">
            <div>
              <p className="font-semibold text-black">72.9K</p>
              <span className="text-xs text-neutral-500">Likes</span>
            </div>
            <div>
              <p className="font-semibold text-black">828</p>
              <span className="text-xs text-neutral-500">Posts</span>
            </div>
            <div>
              <p className="font-semibold text-black">342.9K</p>
              <span className="text-xs text-neutral-500">Views</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
