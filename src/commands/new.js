module.exports = {
  name: 'new',
  description: 'Build a new API',
  run: async toolbox => {
    const {
      parameters,
      print: { success, error, info },
      system,
      templateGenerate
    } = toolbox

    const name = parameters.first

    if (!name) {
      error('API name must be specified')
      return
    }

    try {
      info('Building started!')
      info('Building files ...')

      await templateGenerate(name, 'package.json', { name })
      await templateGenerate(name, '.eslintrc.js')
      await templateGenerate(name, '.prettierrc')
      await templateGenerate(name, 'nodemon.json')
      await templateGenerate(name, '.editorconfig')
      await templateGenerate(name, '.gitignore')
      await templateGenerate(`${name}/src`, 'routes.js')
      await templateGenerate(`${name}/src`, 'app.js')
      await templateGenerate(`${name}/src`, 'server.js')

      info('Building node_modules ...')

      await system.run(`cd ${name} && yarn`)

      info('Building ended!')
    } catch (err) {
      error(err)
    }

    success(`Your API was built!`)
    success(`cd ${name} and start coding!`)
  }
}
