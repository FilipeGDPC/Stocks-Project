export function useScrollToSection() {
    const scrollToSection = (id) => {
      const section = document.getElementById(id)
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' })
      }
    }
  
    return {
      scrollToSection
    }
  }