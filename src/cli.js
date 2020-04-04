const { build } = require('gluegun')

async function run (argv) {
  // create a CLI runtime
  const cli = build()
    .brand('bya')
    .src(__dirname)
    .plugins('./node_modules', { matching: 'bya-*', hidden: true })
    .help() // provides default for help, h, --help, -h
    .version() // provides default for version, v, --version, -v
    .exclude(['meta', 'strings', 'filesystem', 'prompt', 'http', 'patching'])
    .create()

  const toolbox = await cli.run(argv)

  // send it back (for testing, mostly)
  return toolbox
}

module.exports = { run }
