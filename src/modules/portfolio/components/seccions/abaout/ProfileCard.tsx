import Image from "next/image";

type ProfileCardProps = {
  name: string;
  bio: string;
  avatarUrl: string;
};

export const ProfileCard = ({ name, bio, avatarUrl }: ProfileCardProps) => (
  <div className="bg-white shadow-md rounded-2xl p-6 flex items-center gap-4">
    <Image
      src={avatarUrl}
      alt={name}
      width={64}
      height={64}
      className="rounded-full"
    />
    <div>
      <h2 className="text-xl font-semibold">{name}</h2>
      <p className="text-sm text-gray-600">{bio}</p>
    </div>
  </div>
);
