import { usePageTitle } from '../lib/hooks'
import { Hero } from './home/Hero'
import { Features } from './home/Features'
import { HowItWorks } from './home/HowItWorks'
import { Options } from './home/Options'
import { ProjectStructure } from './home/ProjectStructure'
import { Ecosystem } from './home/Ecosystem'
import { GithubCta } from './home/GithubCta'

export default function Home() {
  usePageTitle()
  return (
    <>
      <Hero />
      <Features />
      <HowItWorks />
      <Options />
      <ProjectStructure />
      <Ecosystem />
      <GithubCta />
    </>
  )
}
