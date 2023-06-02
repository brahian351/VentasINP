import getBasePatch from "@/lib/getBasePath";
import TitleButton from "../TitleButton";

export const revalidate = 60;

const Proyectos = async () => {
  const res = await fetch(`${getBasePatch()}/api/Proyectos/getProyectos`);
  const data = await res.json();
  console.log("data", data);
  return (
    <div>
      <TitleButton title="Proyectos" />
    </div>
  );
};

export default Proyectos;
