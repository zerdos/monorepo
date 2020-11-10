const { DevcontainerGenerator } = require("@devcontainer/generator");
const { writeFile } = require("fs").promises;

const run = async () => {
  const devGenerator = new DevcontainerGenerator("gitpod/workspace-full");

  devGenerator.setNodeVersion("lts");
  devGenerator.setXfce();
  devGenerator.setZsh();
  devGenerator.setRemoteDesktop("noVNC");
  devGenerator.setChrome();


  const { Dockerfile, README } = await devGenerator.generate();

  await writeFile(`${__dirname}/Dockerfile`, Dockerfile);

  await writeFile(`${__dirname}/README.md`, README);
};

run();
