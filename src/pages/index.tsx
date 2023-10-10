import Project, { ProjectProps } from "@/components/project";

export default function Home() {
  const projects: ProjectProps[] = [
    {
      title: "Project 1",
      content: "Project content 1",
    },
    {
      title: "Project 2",
      content: "Project content 2",
    },
  ];
  return (
    <main className="flex flex-col gap-6 w-full p-4">
      <div className="flex flex-row items-center">
        <div className="w-3/4">Animacja</div>

        <div className="w-1/4 text-xl">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea officia
          dolor repellat vero, consectetur consequuntur est architecto!
          Distinctio, autem optio. Quas qui eaque libero corporis quo
          consequuntur ex ullam cupiditate!
        </div>
      </div>

      <div className="flex justify-center text-2xl">Polecane</div>

      <div className="flex flex-row justify-center gap-4">
        {projects.map((project, index) => (
          <Project {...project} key={index} />
        ))}
      </div>
    </main>
  );
}
