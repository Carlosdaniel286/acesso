import PortariaCadastro from "./component/cadastro/cadastro";

export async function generateMetadata() {
  return {
    title: "Cadastro",
  };
}

export default async function RenderCadastro() {
  return (
    <>
      <PortariaCadastro />
    </>
  );
}
