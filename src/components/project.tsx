export interface ProjectProps {
  title: string;
  content: string;
}

export default function Project({ title }: ProjectProps) {
  return (
    <div className="w-80 h-96 bg-gray-700 rounded-xl text-white flex justify-center text-xl">
      {title}
    </div>
  );
}
