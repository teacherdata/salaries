function State(slug, name, code, current, constant) {
  this.slug = slug
  this.name = name
  this.code = code
  this.salaries = {
    current: current,
    constant: constant
  }
}

module.exports = State
