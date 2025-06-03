import Image from "next/image";

type ProjectCardProps = {
  title: string;
  description: string;
  imageUrl?: string;
  link: string;
};

export const ProjectCard = ({
  title,
  description,
  imageUrl,
  link,
}: ProjectCardProps) => (
  <a
    href={link}
    target="_blank"
    className="block bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition"
  >
    {imageUrl && (
      <Image
        src={imageUrl}
        alt={title}
        width={400} // o el valor que necesites
        height={160}
        className="object-cover w-full h-40"
      />
    )}
    <div className="p-4">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  </a>
);
