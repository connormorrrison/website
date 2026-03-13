export function scrollToSection(id: string) {
  const main = document.querySelector('main')
  const target = document.getElementById(id)
  if (!main || !target) return

  const top = target.getBoundingClientRect().top + main.scrollTop - main.getBoundingClientRect().top - 32
  main.scrollTo({ top, behavior: 'smooth' })
}
