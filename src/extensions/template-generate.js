module.exports = toolbox => {
  const {
    template: { generate }
  } = toolbox

  async function templateGenerate (folder, fileName, props) {
    await generate({
      template: `${fileName}.ejs`,
      target: `${folder}/${fileName}`,
      props
    })
  }

  toolbox.templateGenerate = templateGenerate
}
